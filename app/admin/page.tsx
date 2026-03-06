"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  Download,
  RefreshCw,
  Send,
  Shield,
  SlidersHorizontal,
  Ticket,
  Trash2,
  UserCheck,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { EmptyState, FieldGroup, NoticeCard } from "@/app/components/system/ux";

type TicketStatus = "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
type TicketCategory = "HARDWARE" | "SOFTWARE" | "NETWORK" | "ACCOUNT" | "OTHER";
type TicketPriority = "LOW" | "MEDIUM" | "HIGH";
type TicketSender = "user" | "admin";
type SlaState = "BREACHED" | "DUE_SOON" | "ON_TRACK";

type AdminTicketSummary = {
  id: string;
  code: string;
  title: string;
  description: string;
  reporterName?: string | null;
  status: TicketStatus;
  category: TicketCategory;
  priority: TicketPriority;
  createdAt: string;
  updatedAt: string;
  assignedAdminId: string | null;
  assignedAt: string | null;
  unreadUserMessages: number;
  isAssignedToMe: boolean;
  isResponseBreached: boolean;
  isResolveBreached: boolean;
  isSlaBreached: boolean;
  isResponseDueSoon: boolean;
  isResolveDueSoon: boolean;
  isSlaDueSoon: boolean;
  slaState: SlaState;
};

type TicketMessage = {
  id: string;
  ticketId: string;
  sender: TicketSender | "system";
  message: string;
  attachmentUrl?: string | null;
  attachmentCaption?: string | null;
  attachmentMimeType?: string | null;
  createdAt: string;
};


type AdminTicketDetail = AdminTicketSummary & {
  reporterName?: string | null;
  reporterLocation?: string | null;
  firstReplyAt: string | null;
  responseDueAt: string;
  resolveDueAt: string;
  messages: TicketMessage[];
};

type AdminTicketListResponse = {
  items: AdminTicketSummary[];
  page: number;
  totalPages: number;
};

type AdminSessionResponse = {
  authenticated: boolean;
  user?: string;
  role?: string;
};

type AdminNotificationEvent = {
  id: string;
  type:
    | "ticket_created"
    | "user_message"
    | "sla_breach"
    | "ticket_status_changed";
  ticketId: string;
  ticketCode: string;
  title: string;
  message: string;
  createdAt: string;
  status?: TicketStatus;
};

type ImageViewerState = {
  url: string;
  caption?: string | null;
};

const statusLabel: Record<TicketStatus, string> = {
  OPEN: "Baru",
  IN_PROGRESS: "Dikerjakan",
  WAITING: "Menunggu",
  CLOSED: "Selesai",
};

const statusBadgeClass: Record<TicketStatus, string> = {
  OPEN: "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20",
  IN_PROGRESS:
    "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20",
  WAITING:
    "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20",
  CLOSED:
    "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20",
};

const statusSelectClass: Record<TicketStatus, string> = {
  OPEN:
    "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300",
  IN_PROGRESS:
    "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300",
  WAITING:
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300",
  CLOSED:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
};

const priorityBadgeClass: Record<TicketPriority, string> = {
  LOW: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
  MEDIUM: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200",
  HIGH: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200",
};

const slaBadgeClass: Record<SlaState, string> = {
  BREACHED:
    "bg-red-100 text-red-700 border-red-200 dark:bg-red-500/20 dark:text-red-200 dark:border-red-500/40",
  DUE_SOON:
    "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-500/20 dark:text-amber-200 dark:border-amber-500/40",
  ON_TRACK:
    "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-200 dark:border-emerald-500/40",
};

const slaLabel: Record<SlaState, string> = {
  BREACHED: "BREACH",
  DUE_SOON: "DUE SOON",
  ON_TRACK: "ON TRACK",
};

const formatRelative = (dateIso: string) =>
  new Date(dateIso).toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });

const parseListResponse = (data: unknown): AdminTicketListResponse | null => {
  if (typeof data !== "object" || data === null) return null;
  const value = data as Partial<AdminTicketListResponse>;
  if (!Array.isArray(value.items) || typeof value.page !== "number" || typeof value.totalPages !== "number") {
    return null;
  }
  return value as AdminTicketListResponse;
};

const isDetail = (data: unknown): data is AdminTicketDetail => {
  if (typeof data !== "object" || data === null) return false;
  const value = data as Partial<AdminTicketDetail>;
  return (
    typeof value.id === "string" &&
    typeof value.code === "string" &&
    typeof value.title === "string" &&
    Array.isArray(value.messages)
  );
};

const isChatSender = (
  sender: TicketMessage["sender"]
): sender is TicketSender => sender === "user" || sender === "admin";

const moveTicketToTop = (
  list: AdminTicketSummary[],
  ticketId: string,
  patch: Partial<AdminTicketSummary>
) => {
  const index = list.findIndex((ticket) => ticket.id === ticketId);
  if (index < 0) return { nextList: list, found: false };
  const current = list[index];
  const updated: AdminTicketSummary = {
    ...current,
    ...patch,
  };
  const nextList = [updated, ...list.slice(0, index), ...list.slice(index + 1)];
  return { nextList, found: true };
};

interface AdminDashboardProps {
  onBackHome: () => void;
}

export const AdminDashboard = ({ onBackHome }: AdminDashboardProps) => {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<string | null>(null);
  const [loginUsername, setLoginUsername] = useState("admin");
  const [loginPassword, setLoginPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [tickets, setTickets] = useState<AdminTicketSummary[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [listError, setListError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState<"ALL" | TicketStatus>("ALL");
  const [categoryFilter, setCategoryFilter] = useState<"all" | TicketCategory>("all");
  const [urgencyFilter, setUrgencyFilter] = useState<"all" | "breached" | "due_soon" | "on_track">("all");
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [showQueueFilters, setShowQueueFilters] = useState(false);
  const queueSearchRef = useRef<HTMLInputElement | null>(null);

  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [ticketDetail, setTicketDetail] = useState<AdminTicketDetail | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState<string | null>(null);

  const [messageInput, setMessageInput] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [deletingTicket, setDeletingTicket] = useState(false);
  const [showDeleteTicketConfirm, setShowDeleteTicketConfirm] = useState(false);
  const [isTicketDetailCollapsed, setIsTicketDetailCollapsed] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus>("OPEN");
  const [viewerImage, setViewerImage] = useState<ImageViewerState | null>(null);
  const lastDetailMessageAtRef = useRef<string>(new Date(0).toISOString());
  const sendingMessageLockRef = useRef(false);
  const notifiedEventIdsRef = useRef<Set<string>>(new Set());
  const lastAdminNotifAtRef = useRef<string>(new Date().toISOString());
  const statusSummary = useMemo(() => {
    return tickets.reduce(
      (acc, ticket) => {
        if (ticket.status === "OPEN") acc.open += 1;
        else if (ticket.status === "IN_PROGRESS") acc.inProgress += 1;
        else if (ticket.status === "WAITING") acc.waiting += 1;
        else if (ticket.status === "CLOSED") acc.closed += 1;
        return acc;
      },
      { open: 0, inProgress: 0, waiting: 0, closed: 0 }
    );
  }, [tickets]);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    params.set("page", String(page));
    params.set("limit", "10");
    if (status !== "ALL") params.set("status", status);
    if (categoryFilter !== "all") params.set("category", categoryFilter);
    if (urgencyFilter !== "all") params.set("urgency", urgencyFilter);
    if (query) params.set("q", query);
    return params.toString();
  }, [page, status, categoryFilter, urgencyFilter, query]);

  const exportQueryString = useMemo(() => {
    const params = new URLSearchParams();
    if (status !== "ALL") params.set("status", status);
    if (categoryFilter !== "all") params.set("category", categoryFilter);
    if (urgencyFilter !== "all") params.set("urgency", urgencyFilter);
    if (query) params.set("q", query);
    return params.toString();
  }, [status, categoryFilter, urgencyFilter, query]);

  const checkSession = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/session");
      const data = (await res.json()) as AdminSessionResponse;
      if (res.ok && data.authenticated && data.user) {
        setAuthenticated(true);
        setAdminUser(data.user);
      } else {
        setAuthenticated(false);
        setAdminUser(null);
      }
    } catch {
      setAuthenticated(false);
      setAdminUser(null);
    } finally {
      setAuthChecked(true);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/") return;
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        (target && target.getAttribute("contenteditable") === "true");
      if (isTyping) return;
      event.preventDefault();
      setShowQueueFilters(true);
      queueSearchRef.current?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const loadTickets = useCallback(async () => {
    if (!authenticated) return;
    setLoadingList(true);
    setListError(null);

    try {
      const res = await fetch(`/api/admin/tickets?${queryString}`);
      const data: unknown = await res.json();
      if (!res.ok) {
        setListError("Gagal memuat daftar tiket.");
        setTickets([]);
        return;
      }

      const parsed = parseListResponse(data);
      if (!parsed) {
        setListError("Format data tiket tidak valid.");
        setTickets([]);
        return;
      }

      setTickets(parsed.items);
      setTotalPages(parsed.totalPages || 1);

      if (!selectedTicketId && parsed.items[0]) {
        setSelectedTicketId(parsed.items[0].id);
      } else if (
        selectedTicketId &&
        !parsed.items.some((ticket) => ticket.id === selectedTicketId)
      ) {
        setSelectedTicketId(parsed.items[0]?.id || null);
      }
    } catch {
      setListError("Koneksi terputus saat memuat daftar tiket.");
      setTickets([]);
    } finally {
      setLoadingList(false);
    }
  }, [authenticated, queryString, selectedTicketId]);

  const loadTicketDetail = useCallback(
    async (id: string) => {
      if (!authenticated) return;
      setLoadingDetail(true);
      setDetailError(null);

      try {
        const res = await fetch(`/api/admin/tickets/${id}`);
        const data: unknown = await res.json();

        if (!res.ok || !isDetail(data)) {
          setDetailError("Gagal memuat detail tiket.");
          setTicketDetail(null);
          return;
        }

        const filteredMessages = data.messages.filter((msg) =>
          isChatSender(msg.sender)
        );
        setTicketDetail({
          ...data,
          messages: filteredMessages,
        });
        setSelectedStatus(data.status);
        if (filteredMessages.length > 0) {
          lastDetailMessageAtRef.current =
            filteredMessages[filteredMessages.length - 1].createdAt;
        } else {
          lastDetailMessageAtRef.current = new Date(0).toISOString();
        }
      } catch {
        setDetailError("Koneksi terputus saat memuat detail tiket.");
        setTicketDetail(null);
      } finally {
        setLoadingDetail(false);
      }
    },
    [authenticated]
  );

  useEffect(() => {
    if (!authenticated) return;
    loadTickets();
  }, [authenticated, queryString, loadTickets]);

  useEffect(() => {
    if (!authenticated || !selectedTicketId) return;
    loadTicketDetail(selectedTicketId);
  }, [authenticated, selectedTicketId, loadTicketDetail]);

  useEffect(() => {
    setIsDescriptionExpanded(false);
    setIsTicketDetailCollapsed(true);
  }, [ticketDetail?.id]);

  useEffect(() => {
    if (!viewerImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setViewerImage(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewerImage]);

  useEffect(() => {
    if (!authenticated || !ticketDetail?.code) return;

    const source = new EventSource(
      `/api/tickets/${ticketDetail.code}/messages/stream?after=${encodeURIComponent(lastDetailMessageAtRef.current)}`
    );

    source.addEventListener("message", (event) => {
      try {
        const data = JSON.parse((event as MessageEvent).data) as TicketMessage;
        if (!isChatSender(data.sender)) return;
        setTicketDetail((prev) => {
          if (!prev) return prev;
          if (prev.messages.some((msg) => msg.id === data.id)) return prev;
          lastDetailMessageAtRef.current = data.createdAt;
          return {
            ...prev,
            messages: [...prev.messages, data],
            unreadUserMessages:
              data.sender === "user"
                ? prev.unreadUserMessages + 1
                : prev.unreadUserMessages,
          };
        });
      } catch {
        // Ignore malformed events.
      }
    });

    return () => {
      source.close();
    };
  }, [authenticated, ticketDetail?.id, ticketDetail?.code]);

  useEffect(() => {
    if (!authenticated) return;

    if (typeof window !== "undefined" && "Notification" in window) {
      if (Notification.permission === "default") {
        void Notification.requestPermission();
      }
    }

    const source = new EventSource(
      `/api/admin/notifications/stream?after=${encodeURIComponent(lastAdminNotifAtRef.current)}`
    );

    source.addEventListener("notification", (event) => {
      try {
        const payload = JSON.parse(
          (event as MessageEvent).data
        ) as AdminNotificationEvent;

        if (notifiedEventIdsRef.current.has(payload.id)) return;
        notifiedEventIdsRef.current.add(payload.id);
        lastAdminNotifAtRef.current = payload.createdAt;

        if (payload.type === "ticket_created") {
          toast("Tiket Baru Masuk", {
            description: `${payload.ticketCode} - ${payload.title}`,
          });
          setPage(1);
          void loadTickets();
        }

        if (payload.type === "sla_breach") {
          toast("SLA Breach", {
            description: `${payload.ticketCode} - ${payload.message}`,
          });
          void loadTickets();
        }

        if (payload.type === "user_message") {
          toast("Pesan User Baru", {
            description: `${payload.ticketCode}: ${payload.message.slice(0, 80)}`,
          });
          let found = false;
          setTickets((prev) => {
            const unreadIncrement = (() => {
              const target = prev.find((ticket) => ticket.id === payload.ticketId);
              if (!target) return 0;
              return selectedTicketId === payload.ticketId ? 0 : 1;
            })();
            const result = moveTicketToTop(prev, payload.ticketId, {
              unreadUserMessages:
                (prev.find((ticket) => ticket.id === payload.ticketId)?.unreadUserMessages || 0) +
                unreadIncrement,
              updatedAt: payload.createdAt,
            });
            found = result.found;
            return result.nextList;
          });
          if (!found) {
            setPage(1);
            void loadTickets();
          }
        }

        if (payload.type === "ticket_status_changed") {
          const nextStatus = payload.status || "CLOSED";
          setTickets((prev) =>
            prev.map((ticket) =>
              ticket.id === payload.ticketId
                ? {
                    ...ticket,
                    status: nextStatus,
                    updatedAt: payload.createdAt,
                  }
                : ticket
            )
          );
          setTicketDetail((prev) =>
            prev && prev.id === payload.ticketId
              ? {
                  ...prev,
                  status: nextStatus,
                  updatedAt: payload.createdAt,
                }
              : prev
          );
          if (selectedTicketId === payload.ticketId) {
            setSelectedStatus(nextStatus);
          }
        }

        if (
          typeof window !== "undefined" &&
          "Notification" in window &&
          Notification.permission === "granted"
        ) {
          const title =
            payload.type === "ticket_created"
              ? `Tiket Baru ${payload.ticketCode}`
              : payload.type === "sla_breach"
              ? `SLA Breach ${payload.ticketCode}`
              : payload.type === "ticket_status_changed"
              ? `Status Tiket ${payload.ticketCode}`
              : `Pesan Baru ${payload.ticketCode}`;
          const body =
            payload.type === "ticket_created"
              ? payload.title
              : payload.message;
          new Notification(title, { body });
        }
      } catch {
        // Ignore malformed notification event.
      }
    });

    source.addEventListener("error", () => {
      source.close();
    });

    return () => {
      source.close();
    };
  }, [authenticated, loadTickets, selectedTicketId]);

  const submitLogin = async () => {
    setAuthError(null);
    setLoggingIn(true);
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });
      const data = (await res.json()) as AdminSessionResponse;
      if (!res.ok || !data.authenticated || !data.user) {
        setAuthError("Username/password admin tidak valid.");
        return;
      }

      setAuthenticated(true);
      setAdminUser(data.user);
      setLoginPassword("");
      setPage(1);
      await loadTickets();
    } catch {
      setAuthError("Gagal login admin.");
    } finally {
      setLoggingIn(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/session", { method: "DELETE" });
    setAuthenticated(false);
    setAdminUser(null);
    setTickets([]);
    setTicketDetail(null);
    setSelectedTicketId(null);
    setAuthError(null);
  };

  const markRead = async (ticketId: string) => {
    try {
      await fetch(`/api/admin/tickets/${ticketId}/read`, {
        method: "POST",
      });
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, unreadUserMessages: 0 } : ticket
        )
      );
      setTicketDetail((prev) =>
        prev && prev.id === ticketId ? { ...prev, unreadUserMessages: 0 } : prev
      );
    } catch {
      // ignore
    }
  };

  const submitAdminReply = async () => {
    if (!ticketDetail || !messageInput.trim()) return;
    if (sendingMessageLockRef.current) return;
    sendingMessageLockRef.current = true;
    setSendingMessage(true);
    setDetailError(null);

    try {
      const res = await fetch(`/api/tickets/${ticketDetail.code}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: "admin",
          message: messageInput.trim(),
        }),
      });

      if (!res.ok) {
        setDetailError("Pesan gagal dikirim.");
        return;
      }

      const created = (await res.json()) as TicketMessage;
      setMessageInput("");
      setTicketDetail((prev) => {
        if (!prev) return prev;
        if (prev.messages.some((msg) => msg.id === created.id)) return prev;
        lastDetailMessageAtRef.current = created.createdAt;
        return {
          ...prev,
          messages: [...prev.messages, created],
          unreadUserMessages: 0,
          assignedAdminId: adminUser || prev.assignedAdminId,
          assignedAt: prev.assignedAt || new Date().toISOString(),
        };
      });
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketDetail.id
            ? {
                ...ticket,
                status:
                  ticket.status === "OPEN" ? "IN_PROGRESS" : ticket.status,
                unreadUserMessages: 0,
                updatedAt: created.createdAt,
                assignedAdminId: adminUser || ticket.assignedAdminId,
                assignedAt: ticket.assignedAt || new Date().toISOString(),
              }
            : ticket
        )
      );
      if (ticketDetail.status === "OPEN") {
        setSelectedStatus("IN_PROGRESS");
        setTicketDetail((prev) =>
          prev
            ? {
                ...prev,
                status: "IN_PROGRESS",
                assignedAdminId: adminUser || prev.assignedAdminId,
                assignedAt: prev.assignedAt || new Date().toISOString(),
              }
            : prev
        );
      }
      void markRead(ticketDetail.id);
    } catch {
      setDetailError("Koneksi terputus saat mengirim pesan.");
    } finally {
      sendingMessageLockRef.current = false;
      setSendingMessage(false);
    }
  };

  const submitStatusUpdate = async (nextStatus: TicketStatus) => {
    if (!ticketDetail) return;
    setSelectedStatus(nextStatus);
    setUpdatingStatus(true);
    setDetailError(null);

    try {
      const res = await fetch(`/api/admin/tickets/${ticketDetail.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) {
        setDetailError("Status tiket gagal diperbarui.");
        return;
      }

      setTicketDetail((prev) =>
        prev ? { ...prev, status: nextStatus } : prev
      );
      setTickets((prev) =>
        prev.map((ticket) =>
          ticket.id === ticketDetail.id
            ? { ...ticket, status: nextStatus }
            : ticket
        )
      );
      await loadTicketDetail(ticketDetail.id);
      await loadTickets();
    } catch {
      setDetailError("Koneksi terputus saat update status.");
    } finally {
      setUpdatingStatus(false);
    }
  };

  const deleteSelectedTicket = async () => {
    if (!ticketDetail || deletingTicket) return;

    setDeletingTicket(true);
    setDetailError(null);
    try {
      const res = await fetch(`/api/admin/tickets/${ticketDetail.id}`, {
        method: "DELETE",
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setDetailError(data.error || "Gagal menghapus tiket.");
        return;
      }

      toast.success(`Tiket ${ticketDetail.code} berhasil dihapus.`);
      setTicketDetail(null);
      setSelectedTicketId(null);
      setMessageInput("");
      setShowDeleteTicketConfirm(false);
      await loadTickets();
    } catch {
      setDetailError("Koneksi terputus saat menghapus tiket.");
    } finally {
      setDeletingTicket(false);
    }
  };

  const downloadReport = async () => {
    if (!authenticated) return;
    setDownloadingReport(true);
    try {
      const url = exportQueryString
        ? `/api/admin/reports/export?${exportQueryString}`
        : "/api/admin/reports/export";

      const res = await fetch(url);
      if (!res.ok) {
        toast.error("Gagal mengunduh laporan.");
        return;
      }

      const blob = await res.blob();
      const contentDisposition = res.headers.get("content-disposition") || "";
      const filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
      const filename = filenameMatch?.[1] || "ticket-report.csv";
      const downloadUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(downloadUrl);
      toast.success("Laporan berhasil diunduh.");
    } catch {
      toast.error("Koneksi terputus saat download laporan.");
    } finally {
      setDownloadingReport(false);
    }
  };

  if (!authChecked) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        Memeriksa sesi admin...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mb-5 flex items-start gap-3">
          <div className="rounded-xl bg-blue-100 p-2.5 dark:bg-blue-500/20">
            <Shield className="size-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Admin Login</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Masuk untuk mengelola tiket, SLA, dan balasan user.
            </p>
          </div>
        </div>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (loggingIn || !loginUsername || !loginPassword) return;
            void submitLogin();
          }}
        >
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Username
            </p>
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              placeholder="Masukkan username admin"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Password
            </p>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Masukkan password"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
          {authError && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300">
              {authError}
            </p>
          )}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={onBackHome}
              className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Kembali
            </button>
            <button
              type="submit"
              disabled={loggingIn || !loginUsername || !loginPassword}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {loggingIn ? "Masuk..." : "Masuk Admin"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Admin Dashboard</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Login sebagai: <span className="font-semibold">{adminUser}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <button
            type="button"
            onClick={downloadReport}
            disabled={downloadingReport}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:px-4 md:text-sm"
          >
            <Download className="size-4" />
            {downloadingReport ? "Mengunduh..." : "Download Laporan"}
          </button>
          <button
            type="button"
            onClick={loadTickets}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:px-4 md:text-sm"
          >
            <RefreshCw className="size-4" />
            Refresh
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/users")}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:px-4 md:text-sm"
          >
            Kelola Admin
          </button>
          <button
            type="button"
            onClick={logout}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:px-4 md:text-sm"
          >
            Logout
          </button>
          <button
            type="button"
            onClick={onBackHome}
            className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 md:px-4 md:text-sm"
          >
            Kembali
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[460px_minmax(0,1fr)] xl:h-[calc(100vh-170px)]">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col min-h-0 overflow-hidden md:p-4">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            <Shield className="size-4 text-blue-500" />
            Queue Tiket
          </div>

          <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="rounded-lg border border-indigo-200 bg-indigo-50 px-2 py-2 text-center dark:border-indigo-500/30 dark:bg-indigo-500/10">
              <p className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300">NEW</p>
              <p className="text-base font-extrabold text-indigo-700 dark:text-indigo-200">{statusSummary.open}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 px-2 py-2 text-center dark:border-blue-500/30 dark:bg-blue-500/10">
              <p className="text-[10px] font-bold text-blue-700 dark:text-blue-300">IN PROGRESS</p>
              <p className="text-base font-extrabold text-blue-700 dark:text-blue-200">{statusSummary.inProgress}</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 px-2 py-2 text-center dark:border-amber-500/30 dark:bg-amber-500/10">
              <p className="text-[10px] font-bold text-amber-800 dark:text-amber-300">WAITING</p>
              <p className="text-base font-extrabold text-amber-700 dark:text-amber-200">{statusSummary.waiting}</p>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-2 text-center dark:border-emerald-500/30 dark:bg-emerald-500/10">
              <p className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300">CLOSED</p>
              <p className="text-base font-extrabold text-emerald-700 dark:text-emerald-200">{statusSummary.closed}</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3 dark:border-slate-700 dark:bg-slate-800/40">
            <button
              type="button"
              onClick={() => setShowQueueFilters((prev) => !prev)}
              aria-expanded={showQueueFilters}
              aria-controls="queue-filter-panel"
              className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <span className="inline-flex items-center gap-2">
                <SlidersHorizontal className="size-3.5" />
                Filter Queue
              </span>
              {showQueueFilters ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>

            {showQueueFilters && (
              <div id="queue-filter-panel" className="mt-3 space-y-3">
                <FieldGroup label="Cari tiket" htmlFor="queue-search">
                  <input
                    id="queue-search"
                    ref={queueSearchRef}
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Cari kode/judul tiket..."
                    className="ds-focus-strong w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </FieldGroup>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <FieldGroup label="Status" htmlFor="queue-status">
                    <select
                      id="queue-status"
                      value={status}
                      onChange={(e) => {
                        setPage(1);
                        setStatus(e.target.value as "ALL" | TicketStatus);
                      }}
                      className="ds-focus-strong w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="ALL">Semua Status</option>
                      <option value="OPEN">Baru</option>
                      <option value="IN_PROGRESS">Dikerjakan</option>
                      <option value="WAITING">Menunggu</option>
                      <option value="CLOSED">Selesai</option>
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Kategori" htmlFor="queue-category">
                    <select
                      id="queue-category"
                      value={categoryFilter}
                      onChange={(e) => {
                        setPage(1);
                        setCategoryFilter(e.target.value as "all" | TicketCategory);
                      }}
                      className="ds-focus-strong w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="all">Semua Kategori</option>
                      <option value="HARDWARE">Hardware</option>
                      <option value="SOFTWARE">Software</option>
                      <option value="NETWORK">Network</option>
                      <option value="ACCOUNT">Account</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </FieldGroup>
                  <FieldGroup label="Urgensi SLA" htmlFor="queue-urgency">
                    <select
                      id="queue-urgency"
                      value={urgencyFilter}
                      onChange={(e) => {
                        setPage(1);
                        setUrgencyFilter(
                          e.target.value as "all" | "breached" | "due_soon" | "on_track"
                        );
                      }}
                      className="ds-focus-strong w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="all">Semua SLA</option>
                      <option value="breached">SLA Breach</option>
                      <option value="due_soon">Due Soon</option>
                      <option value="on_track">On Track</option>
                    </select>
                  </FieldGroup>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setPage(1);
                    setQuery(searchInput.trim());
                    setShowQueueFilters(false);
                  }}
                  className="w-full rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Terapkan Filter
                </button>
              </div>
            )}
          </div>

          <div className="mt-4 space-y-3 flex-1 overflow-y-auto min-h-0 pr-1">
            {loadingList && (
              <NoticeCard role="status" aria-live="polite">
                Memuat tiket...
              </NoticeCard>
            )}
            {listError && (
              <NoticeCard tone="error" role="alert">
                {listError}
              </NoticeCard>
            )}
            {!loadingList &&
              !listError &&
              tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={async () => {
                    setSelectedTicketId(ticket.id);
                    if (ticket.unreadUserMessages > 0) {
                      await markRead(ticket.id);
                    }
                  }}
                  className={`w-full rounded-xl border p-3 text-left transition ${
                    selectedTicketId === ticket.id
                      ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-500/10"
                      : ticket.isSlaBreached
                      ? "border-red-300 bg-red-50/70 dark:border-red-500/50 dark:bg-red-500/10"
                      : ticket.isSlaDueSoon
                      ? "border-amber-300 bg-amber-50/70 dark:border-amber-500/50 dark:bg-amber-500/10"
                      : "border-slate-200 bg-slate-50 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="max-w-[72%] truncate text-xs font-bold text-slate-500 dark:text-slate-300">
                      {ticket.code} / {ticket.reporterName || "Pelapor"}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${statusBadgeClass[ticket.status]}`}
                    >
                      {statusLabel[ticket.status].toUpperCase()}
                    </span>
                  </div>
                  <div className="mt-2 flex items-start justify-between gap-2">
                    <p className="line-clamp-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {ticket.title}
                    </p>
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${priorityBadgeClass[ticket.priority]}`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      SLA: {slaLabel[ticket.slaState]}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold truncate max-w-[55%]">
                      <UserCheck className="size-3" />
                      {ticket.assignedAdminId || "Unassigned"}
                    </span>
                  </div>
                  {ticket.unreadUserMessages > 0 && (
                    <span className="mt-2 inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-500/10 dark:text-red-300">
                      {ticket.unreadUserMessages} pesan baru
                    </span>
                  )}
                </button>
              ))}
            {!loadingList && !listError && tickets.length === 0 && (
              <EmptyState role="status" aria-live="polite">
                Tidak ada tiket yang cocok dengan filter saat ini.
              </EmptyState>
            )}
          </div>

          <div className="mt-4 shrink-0 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Halaman {page} / {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={loadingList || page <= 1}
                className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={loadingList || page >= totalPages}
                className="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 disabled:opacity-50 dark:border-slate-700 dark:text-slate-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col min-h-0">
          {!selectedTicketId && (
            <EmptyState className="flex h-96 items-center justify-center">
              Pilih tiket di queue untuk mulai memproses percakapan.
            </EmptyState>
          )}

          {selectedTicketId && (
            <div className="space-y-3 flex flex-col min-h-0 h-full md:space-y-4">
              {loadingDetail && (
                <p className="text-sm text-slate-500 dark:text-slate-400">Memuat detail tiket...</p>
              )}
              {detailError && (
                <p className="text-sm text-red-600 dark:text-red-400">{detailError}</p>
              )}

              {ticketDetail && !loadingDetail && (
                <div className="flex flex-col min-h-0 h-full space-y-3 md:space-y-4">
                  <div className="space-y-2 border-b border-slate-200 pb-3 dark:border-slate-800 md:space-y-3">
                    <div className="inline-flex max-w-full items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-300">
                      <Ticket className="size-3.5" />
                      <span className="truncate">
                        {ticketDetail.code} / {ticketDetail.reporterName || "Pelapor"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1 min-w-0">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white md:text-xl break-words">
                          {ticketDetail.title}
                        </h3>
                        <p
                          className={`text-xs text-slate-500 dark:text-slate-400 md:text-sm ${
                            isDescriptionExpanded ? "" : "line-clamp-2"
                          }`}
                        >
                          {ticketDetail.description}
                        </p>
                        {ticketDetail.description.length > 180 && (
                          <button
                            type="button"
                            onClick={() =>
                              setIsDescriptionExpanded((prev) => !prev)
                            }
                            className="text-[11px] font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                          >
                            {isDescriptionExpanded
                              ? "Sembunyikan deskripsi"
                              : "Lihat deskripsi lengkap"}
                          </button>
                        )}
                      </div>
                      <div className="w-full sm:w-44 shrink-0 space-y-1 sm:self-start sm:-mt-3">
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Status Tiket
                        </p>
                        <div className="flex items-center gap-2">
                          <select
                            value={selectedStatus}
                            onChange={(e) =>
                              void submitStatusUpdate(
                                e.target.value as TicketStatus
                              )
                            }
                            disabled={updatingStatus || deletingTicket}
                            className={`w-full rounded-lg border px-2.5 py-2 text-xs font-bold outline-none focus:border-blue-500 disabled:opacity-60 ${statusSelectClass[selectedStatus]}`}
                          >
                            <option value="OPEN">OPEN</option>
                            <option value="IN_PROGRESS">IN_PROGRESS</option>
                            <option value="WAITING">WAITING</option>
                            <option value="CLOSED">CLOSED</option>
                          </select>
                          <button
                            type="button"
                            onClick={() => setShowDeleteTicketConfirm(true)}
                            disabled={deletingTicket || updatingStatus}
                            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-red-200 bg-red-50 px-2.5 py-2 text-red-700 hover:bg-red-100 disabled:opacity-60 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
                            title="Hapus tiket"
                            aria-label="Hapus tiket"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                      <button
                        type="button"
                        onClick={() => setIsTicketDetailCollapsed((prev) => !prev)}
                        aria-expanded={!isTicketDetailCollapsed}
                        aria-controls="admin-ticket-meta-panel"
                        className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        <span>Detail Tiket</span>
                        {isTicketDetailCollapsed ? (
                          <ChevronDown className="size-4" />
                        ) : (
                          <ChevronUp className="size-4" />
                        )}
                      </button>

                      {!isTicketDetailCollapsed && (
                        <div id="admin-ticket-meta-panel" className="mt-3 space-y-3">
                          <div className="grid grid-cols-1 gap-2 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                            <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Prioritas: {ticketDetail.priority}
                            </span>
                            <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Kategori: {ticketDetail.category}
                            </span>
                            <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Lokasi: {ticketDetail.reporterLocation || "-"}
                            </span>
                            <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Assigned: {ticketDetail.assignedAdminId || "-"}
                            </span>
                            {/* <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Unread user msg: {ticketDetail.unreadUserMessages}
                            </span> */}
                            <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Respons SLA: {formatRelative(ticketDetail.responseDueAt)}
                            </span>
                            <span className="rounded-md bg-slate-100 px-2 py-1 dark:bg-slate-800">
                              Resolve SLA: {formatRelative(ticketDetail.resolveDueAt)}
                            </span>
                            {/* <span
                              className={`rounded-md border px-2 py-1 font-bold ${slaBadgeClass[ticketDetail.slaState]}`}
                            >
                              SLA: {slaLabel[ticketDetail.slaState]}
                            </span> */}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-h-0 space-y-2 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950/50 md:space-y-3 md:p-4">
                    {ticketDetail.messages.length === 0 && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Belum ada pesan pada tiket ini.
                      </p>
                    )}
                    {ticketDetail.messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.sender === "admin" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm md:max-w-[80%] md:px-4 ${
                            msg.sender === "admin"
                              ? "bg-blue-600 text-white"
                              : "border border-slate-200 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                          }`}
                        >
                          {msg.message ? <p>{msg.message}</p> : null}
                          {msg.attachmentUrl && (
                            <div className={msg.message ? "mt-2" : ""}>
                              <button
                                type="button"
                                className="block"
                                onClick={() =>
                                  setViewerImage({
                                    url: msg.attachmentUrl || "",
                                    caption: msg.attachmentCaption || null,
                                  })
                                }
                                aria-label="Lihat gambar"
                              >
                                <img
                                  src={msg.attachmentUrl}
                                  alt={msg.attachmentCaption || "Attachment"}
                                  className="max-h-64 w-auto rounded-lg border border-slate-200 object-contain dark:border-slate-700"
                                />
                              </button>
                              {msg.attachmentCaption && (
                                <p className="mt-1 text-xs opacity-90">
                                  {msg.attachmentCaption}
                                </p>
                              )}
                            </div>
                          )}
                          <p className="mt-1 text-[10px] opacity-75">{formatRelative(msg.createdAt)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      submitAdminReply();
                    }}
                    className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900 shrink-0 sm:flex-row sm:items-center"
                  >
                    <input
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Ketik balasan admin..."
                      className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                      disabled={sendingMessage}
                    />
                    <button
                      type="submit"
                      disabled={sendingMessage || !messageInput.trim()}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-60 sm:w-auto"
                    >
                      {sendingMessage ? (
                        <>
                          <RefreshCw className="size-4 animate-spin" />
                          Mengirim
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Kirim
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {showDeleteTicketConfirm && ticketDetail && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-ticket-title"
          aria-describedby="delete-ticket-desc"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h3 id="delete-ticket-title" className="text-base font-bold text-slate-900 dark:text-white">
              Hapus Tiket {ticketDetail.code}?
            </h3>
            <p id="delete-ticket-desc" className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Tindakan ini permanen. Semua chat pada tiket ini juga akan ikut terhapus.
            </p>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteTicketConfirm(false)}
                disabled={deletingTicket}
                className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-60 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={deleteSelectedTicket}
                disabled={deletingTicket}
                className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-sm font-semibold text-red-700 hover:bg-red-100 disabled:opacity-60 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
              >
                {deletingTicket ? "Menghapus..." : "Ya, Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
      {viewerImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar"
          onClick={() => setViewerImage(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setViewerImage(null)}
              className="absolute right-0 top-0 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Tutup pratinjau"
            >
              <X className="size-5" />
            </button>
            <img
              src={viewerImage.url}
              alt={viewerImage.caption || "Preview gambar"}
              className="max-h-[80dvh] w-full rounded-xl object-contain"
            />
            {viewerImage.caption ? (
              <p className="mt-2 text-center text-sm text-slate-100">
                {viewerImage.caption}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default function AdminRoutePage() {
  const router = useRouter();
  return <AdminDashboard onBackHome={() => router.push("/")} />;
}
