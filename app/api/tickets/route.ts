import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function generateTicketCode() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `TIC-${rand}`;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pageParam = Number(searchParams.get("page") || "1");
    const limitParam = Number(searchParams.get("limit") || "5");
    const page = Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;
    const limit =
      Number.isFinite(limitParam) && limitParam > 0
        ? Math.min(Math.floor(limitParam), 20)
        : 5;

    const [total, tickets] = await Promise.all([
      prisma.ticket.count(),
      prisma.ticket.findMany({
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          code: true,
          title: true,
          status: true,
          category: true,
          createdAt: true,
        },
      }),
    ]);

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return NextResponse.json({
      items: tickets,
      page,
      limit,
      total,
      totalPages,
    });
  } catch (error) {
    console.error("Failed to load tickets:", error);
    return NextResponse.json(
      { error: "Failed to load tickets" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const body = await req.json();

  const { title, description, priority, category } = body;

  if (!title || !description || !priority || !category) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // 1. Fetch SLA policy by priority
  const sla = await prisma.slaPolicy.findFirst({
    where: {
      priority,
      active: true,
    },
  });

  if (!sla) {
    return NextResponse.json(
      { error: "SLA policy not found" },
      { status: 500 }
    );
  }

  const now = new Date();

  // 2. Calculate SLA deadlines
  const responseDueAt = new Date(
    now.getTime() + sla.responseMinutes * 60 * 1000
  );

  const resolveDueAt = new Date(
    now.getTime() + sla.resolveMinutes * 60 * 1000
  );

  // 3. Create ticket
  try {
    const ticket = await prisma.ticket.create({
      data: {
        code: generateTicketCode(),
        title,
        description,
        priority,
        category,
        responseDueAt,
        resolveDueAt,
      },
    });
    return NextResponse.json(ticket);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create ticket" },
      { status: 500 }
    );
  }
}
