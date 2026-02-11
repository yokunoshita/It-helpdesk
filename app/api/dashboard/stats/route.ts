import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type WeeklyPoint = {
  name: string;
  tickets: number;
};

type StatusPoint = {
  name: "Selesai" | "Proses" | "Tertunda";
  value: number;
  color: string;
};

const DAY_LABELS: Record<number, string> = {
  0: "Min",
  1: "Sen",
  2: "Sel",
  3: "Rab",
  4: "Kam",
  5: "Jum",
  6: "Sab",
};

export async function GET() {
  try {
    const now = new Date();
    const start = new Date(now);
    start.setDate(now.getDate() - 6);
    start.setHours(0, 0, 0, 0);

    const [closedCount, inProgressCount, waitingCount, needAttentionCount, weeklyTickets] =
      await Promise.all([
        prisma.ticket.count({
          where: { status: "CLOSED" },
        }),
        prisma.ticket.count({
          where: { status: { in: ["OPEN", "IN_PROGRESS"] } },
        }),
        prisma.ticket.count({
          where: { status: "WAITING" },
        }),
        prisma.ticket.count({
          where: {
            status: { not: "CLOSED" },
            OR: [
              { resolveDueAt: { lt: now } },
              {
                AND: [{ firstReplyAt: null }, { responseDueAt: { lt: now } }],
              },
            ],
          },
        }),
        prisma.ticket.findMany({
          where: {
            createdAt: { gte: start },
          },
          select: {
            createdAt: true,
          },
        }),
      ]);

    const weeklyMap = new Map<string, number>();
    const weeklyData: WeeklyPoint[] = [];

    for (let i = 0; i < 7; i += 1) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      const key = day.toISOString().slice(0, 10);
      weeklyMap.set(key, 0);
      weeklyData.push({
        name: DAY_LABELS[day.getDay()],
        tickets: 0,
      });
    }

    for (const ticket of weeklyTickets) {
      const key = new Date(ticket.createdAt).toISOString().slice(0, 10);
      if (!weeklyMap.has(key)) continue;
      weeklyMap.set(key, (weeklyMap.get(key) || 0) + 1);
    }

    for (let i = 0; i < weeklyData.length; i += 1) {
      const day = new Date(start);
      day.setDate(start.getDate() + i);
      const key = day.toISOString().slice(0, 10);
      weeklyData[i].tickets = weeklyMap.get(key) || 0;
    }

    const totalForPie = closedCount + inProgressCount + waitingCount;
    const toPercent = (value: number) =>
      totalForPie === 0 ? 0 : Math.round((value / totalForPie) * 100);

    const statusData: StatusPoint[] = [
      { name: "Selesai", value: toPercent(closedCount), color: "#10b981" },
      {
        name: "Proses",
        value: toPercent(inProgressCount),
        color: "#3b82f6",
      },
      { name: "Tertunda", value: toPercent(waitingCount), color: "#f59e0b" },
    ];

    return NextResponse.json({
      cards: {
        completed: closedCount,
        inProgress: inProgressCount,
        needsAttention: needAttentionCount,
      },
      weeklyVolume: weeklyData,
      statusBreakdown: statusData,
    });
  } catch (error) {
    console.error("Failed to load dashboard stats:", error);
    return NextResponse.json(
      { error: "Failed to load dashboard stats" },
      { status: 500 }
    );
  }
}
