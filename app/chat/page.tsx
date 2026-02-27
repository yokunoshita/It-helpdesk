"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { 
  Send, 
  User, 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Tag, 
  AlertTriangle,
  Star,
  Paperclip,
  X
} from "lucide-react";

interface ChatPageProps {
  onBack: () => void;
  ticketId: string;
  ticketData: {
    name: string;
    location: string;
    title: string;
    category: string;
    urgency: string;
  };
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "admin";
  timestamp: string;
  createdAt: string;
  attachmentUrl?: string | null;
  attachmentCaption?: string | null;
  attachmentMimeType?: string | null;
  sending?: boolean;
}

type TicketStatus = "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
type ChatTicketData = {
  name: string;
  location: string;
  title: string;
  category: string;
  urgency: string;
  detail?: string;
};
type StreamMessage = {
  id: string;
  ticketId: string;
  sender: "user" | "admin";
  message: string;
  createdAt: string;
  attachmentUrl?: string | null;
  attachmentCaption?: string | null;
  attachmentMimeType?: string | null;
};
type PersistedChatState = {
  ticketId: string;
  ticketData: ChatTicketData | null;
};

const LAST_CHAT_STORAGE_KEY = "hd_last_chat_state";
const WELCOME_PREFIX = "welcome:";
const WELCOME_TEXT =
  "Hai! Laporan kamu sudah masuk ke tim kami, nih. Lagi kita cek dulu, ya! Oh iya, kalau ada detail lain yang ketinggalan, langsung kirim di sini aja ya.";

const parseJsonSafe = async <T,>(res: Response): Promise<T | null> => {
  const raw = await res.text();
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

const getStatusLabel = (status: TicketStatus | null) => {
  switch (status) {
    case "OPEN":
      return "Baru";
    case "IN_PROGRESS":
      return "Diproses";
    case "WAITING":
      return "Menunggu";
    case "CLOSED":
      return "Selesai";
    default:
      return "Tidak diketahui";
  }
};

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

const formatMimeShort = (mimeType: string | undefined) => {
  if (!mimeType) return "IMAGE";
  const part = mimeType.split("/")[1];
  if (!part) return "IMAGE";
  return part.toUpperCase();
};

export const ChatPage = ({ onBack, ticketId, ticketData }: ChatPageProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const [ticketStatus, setTicketStatus] = useState<
    TicketStatus | null
  >(null);
  const [feedbackRating, setFeedbackRating] = useState<number | null>(null);
  const [draftRating, setDraftRating] = useState<number>(0);
  const [submittingFeedback, setSubmittingFeedback] = useState(false);
  const [closingTicket, setClosingTicket] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [attachmentPreviewUrl, setAttachmentPreviewUrl] = useState<string | null>(null);
  const [assignedAdminName, setAssignedAdminName] = useState<string | null>(null);

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastMessageAtRef = useRef<string>(new Date(0).toISOString());
  const attachmentInputRef = useRef<HTMLInputElement>(null);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  useEffect(() => {
    const loadMessages = async () => {
      setLoading(true);
      try {
        const [messagesRes, ticketRes] = await Promise.all([
          fetch(`/api/tickets/${ticketId}/messages`),
          fetch(`/api/tickets/${ticketId}`),
        ]);
        const data = await parseJsonSafe<
          Array<{
            id: string;
            message: string;
            sender: "user" | "admin";
            createdAt: string;
            attachmentUrl?: string | null;
            attachmentCaption?: string | null;
            attachmentMimeType?: string | null;
          }>
        >(messagesRes);

        if (!messagesRes.ok || !data) {
          setMessages([]);
          return;
        }

        if (!Array.isArray(data)) {
          console.error("Invalid messages response:", data);
          setMessages([]);
          return;
        }

        const mapped = data.map((m: {
          id: string;
          message: string;
          sender: "user" | "admin";
          createdAt: string;
          attachmentUrl?: string | null;
          attachmentCaption?: string | null;
          attachmentMimeType?: string | null;
        }) => ({
          id: m.id,
          text: m.message,
          sender: m.sender,
          timestamp: new Date(m.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          createdAt: m.createdAt,
          attachmentUrl: m.attachmentUrl || null,
          attachmentCaption: m.attachmentCaption || null,
          attachmentMimeType: m.attachmentMimeType || null,
        }));

        const unique = Array.from(
          new Map(mapped.map((message) => [message.id, message])).values()
        );
        const hasAdminMessage = unique.some((msg) => msg.sender === "admin");
        const withWelcome = hasAdminMessage
          ? unique
          : [
              {
                id: `${WELCOME_PREFIX}${ticketId}`,
                text: WELCOME_TEXT,
                sender: "admin" as const,
                timestamp: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                createdAt: new Date().toISOString(),
                attachmentUrl: null,
                attachmentCaption: null,
                attachmentMimeType: null,
              },
              ...unique,
            ];

        setMessages(withWelcome);
        if (data.length > 0) {
          const last = data[data.length - 1] as { createdAt: string };
          lastMessageAtRef.current = last.createdAt;
        }

        if (ticketRes.ok) {
          const ticket = await parseJsonSafe<{
            status?: TicketStatus;
            feedbackRating?: number | null;
            assignedAdminId?: string | null;
          }>(
            ticketRes
          );
          if (!ticket) {
            setTicketStatus(null);
            return;
          }
          if (
            ticket.status === "OPEN" ||
            ticket.status === "IN_PROGRESS" ||
            ticket.status === "WAITING" ||
            ticket.status === "CLOSED"
          ) {
            setTicketStatus(ticket.status);
          }
          if (typeof ticket.feedbackRating === "number") {
            setFeedbackRating(ticket.feedbackRating);
            setDraftRating(ticket.feedbackRating);
          } else {
            setFeedbackRating(null);
            setDraftRating(0);
          }
          if (typeof ticket.assignedAdminId === "string" && ticket.assignedAdminId.trim()) {
            setAssignedAdminName(ticket.assignedAdminId.trim());
          } else {
            setAssignedAdminName(null);
          }
        }
      } catch {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, [ticketId]);

  useEffect(() => {
    const source = new EventSource(
      `/api/tickets/${ticketId}/messages/stream?after=${encodeURIComponent(lastMessageAtRef.current)}`
    );

    source.addEventListener("message", (event) => {
      try {
        const payload = JSON.parse((event as MessageEvent).data) as StreamMessage;
        setMessages((prev) => {
          if (prev.some((msg) => msg.id === payload.id)) {
            return prev.filter((msg) => !msg.sending);
          }
          lastMessageAtRef.current = payload.createdAt;
          const optimisticIndex = prev.findIndex(
            (msg) =>
              msg.sending &&
              msg.sender === "user" &&
              msg.text === payload.message &&
              !!msg.attachmentUrl === !!payload.attachmentUrl
          );
          if (optimisticIndex >= 0) {
            const next = [...prev];
            next[optimisticIndex] = {
              id: payload.id,
              text: payload.message,
              sender: payload.sender,
              timestamp: new Date(payload.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              createdAt: payload.createdAt,
              attachmentUrl: payload.attachmentUrl || null,
              attachmentCaption: payload.attachmentCaption || null,
              attachmentMimeType: payload.attachmentMimeType || null,
              sending: false,
            };
            return next;
          }
          return [
            ...prev,
            {
              id: payload.id,
              text: payload.message,
              sender: payload.sender,
              timestamp: new Date(payload.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
              createdAt: payload.createdAt,
              attachmentUrl: payload.attachmentUrl || null,
              attachmentCaption: payload.attachmentCaption || null,
              attachmentMimeType: payload.attachmentMimeType || null,
              sending: false,
            },
          ];
        });
      } catch {
        // Ignore malformed stream payloads.
      }
    });

    return () => {
      source.close();
    };
  }, [ticketId]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (document.visibilityState !== "visible") return;
      try {
        const ticketRes = await fetch(`/api/tickets/${ticketId}`);
        if (!ticketRes.ok) return;
        const ticket = await parseJsonSafe<{
          status?: TicketStatus;
          feedbackRating?: number | null;
          assignedAdminId?: string | null;
        }>(ticketRes);
        if (!ticket) return;
        if (
          ticket.status === "OPEN" ||
          ticket.status === "IN_PROGRESS" ||
          ticket.status === "WAITING" ||
          ticket.status === "CLOSED"
        ) {
          setTicketStatus(ticket.status);
        }
        if (typeof ticket.feedbackRating === "number") {
          setFeedbackRating(ticket.feedbackRating);
          setDraftRating(ticket.feedbackRating);
        }
        if (typeof ticket.assignedAdminId === "string" && ticket.assignedAdminId.trim()) {
          setAssignedAdminName(ticket.assignedAdminId.trim());
        } else {
          setAssignedAdminName(null);
        }
      } catch {
        // Ignore transient polling errors.
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [ticketId]);

  useEffect(() => {
    if (!showCloseConfirm) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !closingTicket) {
        setShowCloseConfirm(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showCloseConfirm, closingTicket]);


const handleSendMessage = async (e: React.FormEvent) => {
  e.preventDefault();
  const text = inputText.trim();
  if (!text && !attachmentFile) return;
  const selectedFile = attachmentFile;
  const selectedPreviewUrl = attachmentPreviewUrl;
  const optimisticId = `temp:${Date.now().toString(36)}:${Math.random()
    .toString(36)
    .slice(2, 8)}`;
  const optimisticCreatedAt = new Date().toISOString();

  setMessages((prev) => [
    ...prev,
    {
      id: optimisticId,
      text: selectedFile ? "" : text,
      sender: "user",
      timestamp: "Mengirim...",
      createdAt: optimisticCreatedAt,
      attachmentUrl: selectedPreviewUrl || null,
      attachmentCaption: selectedFile ? text : null,
      attachmentMimeType: selectedFile?.type || null,
      sending: true,
    },
  ]);
  setInputText("");
  setAttachmentPreviewUrl(null);
  setAttachmentFile(null);
  if (attachmentInputRef.current) {
    attachmentInputRef.current.value = "";
  }

  let uploadedAttachment: {
    attachmentUrl: string;
    attachmentMimeType: string;
    attachmentFileName: string;
    attachmentSize: number;
  } | null = null;

  try {
    if (selectedFile) {
      const presignRes = await fetch("/api/storage/presign-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId,
          fileName: selectedFile.name,
          mimeType: selectedFile.type,
          size: selectedFile.size,
        }),
      });
      const presignPayload = await parseJsonSafe<{
        uploadUrl?: string;
        fileUrl?: string;
        error?: string;
      }>(presignRes);
      if (!presignRes.ok || !presignPayload?.uploadUrl || !presignPayload.fileUrl) {
        alert(presignPayload?.error || "Gagal membuat URL upload gambar.");
        return;
      }

      try {
        const uploadRes = await fetch(presignPayload.uploadUrl, {
          method: "PUT",
          headers: {
            "Content-Type": selectedFile.type,
          },
          body: selectedFile,
        });
        if (!uploadRes.ok) {
          const uploadErrorText = await uploadRes.text().catch(() => "");
          throw new Error(uploadErrorText || "Upload browser ke storage gagal.");
        }

        uploadedAttachment = {
          attachmentUrl: presignPayload.fileUrl,
          attachmentMimeType: selectedFile.type,
          attachmentFileName: selectedFile.name,
          attachmentSize: selectedFile.size,
        };
      } catch {
        const fallbackForm = new FormData();
        fallbackForm.append("ticketId", ticketId);
        fallbackForm.append("attachment", selectedFile);
        const fallbackRes = await fetch("/api/storage/upload", {
          method: "POST",
          body: fallbackForm,
        });
        const fallbackPayload = await parseJsonSafe<{
          fileUrl?: string;
          attachmentMimeType?: string;
          attachmentFileName?: string;
          attachmentSize?: number;
          error?: string;
        }>(fallbackRes);
        if (!fallbackRes.ok || !fallbackPayload?.fileUrl) {
          throw new Error(
            fallbackPayload?.error ||
              "Upload gambar gagal. Cek CORS bucket atau koneksi server ke storage."
          );
        }
        uploadedAttachment = {
          attachmentUrl: fallbackPayload.fileUrl,
          attachmentMimeType: fallbackPayload.attachmentMimeType || selectedFile.type,
          attachmentFileName: fallbackPayload.attachmentFileName || selectedFile.name,
          attachmentSize: fallbackPayload.attachmentSize || selectedFile.size,
        };
      }
    }

    const res = await fetch(`/api/tickets/${ticketId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: "user",
        message: selectedFile ? "" : text,
        attachmentCaption: selectedFile ? text : null,
        attachmentUrl: uploadedAttachment?.attachmentUrl || null,
        attachmentMimeType: uploadedAttachment?.attachmentMimeType || null,
        attachmentFileName: uploadedAttachment?.attachmentFileName || null,
        attachmentSize: uploadedAttachment?.attachmentSize || null,
      }),
    });

    const saved = await parseJsonSafe<{
      id: string;
      message: string;
      sender: "user" | "admin";
      createdAt: string;
      attachmentUrl?: string | null;
      attachmentCaption?: string | null;
      attachmentMimeType?: string | null;
      error?: string;
    }>(res);

    if (!res.ok) {
      setMessages((prev) => prev.filter((msg) => msg.id !== optimisticId));
      alert(saved?.error || "Gagal mengirim pesan");
      if (res.status === 409) {
        setTicketStatus("CLOSED");
      }
      return;
    }

    if (
      !saved?.id ||
      !saved?.sender ||
      !saved?.createdAt ||
      (!saved?.message && !saved?.attachmentUrl)
    ) {
      setMessages((prev) => prev.filter((msg) => msg.id !== optimisticId));
      alert("Respons server tidak valid. Coba kirim ulang.");
      return;
    }

    setMessages((prev) => {
      const withoutOptimistic = prev.filter((msg) => msg.id !== optimisticId);
      if (withoutOptimistic.some((msg) => msg.id === saved.id)) {
        return withoutOptimistic;
      }
      return [...withoutOptimistic, {
        id: saved.id,
        text: saved.message,
        sender: saved.sender,
        timestamp: new Date(saved.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        createdAt: saved.createdAt,
        attachmentUrl: saved.attachmentUrl || null,
        attachmentCaption: saved.attachmentCaption || null,
        attachmentMimeType: saved.attachmentMimeType || null,
        sending: false,
      }];
    });
    lastMessageAtRef.current = saved.createdAt;

    if (selectedPreviewUrl) {
      URL.revokeObjectURL(selectedPreviewUrl);
    }

    const ticketRes = await fetch(`/api/tickets/${ticketId}`);
    if (ticketRes.ok) {
      const ticket = await parseJsonSafe<{
        status?: TicketStatus;
        feedbackRating?: number | null;
      }>(ticketRes);
      if (!ticket) return;
      if (
        ticket.status === "OPEN" ||
        ticket.status === "IN_PROGRESS" ||
        ticket.status === "WAITING" ||
        ticket.status === "CLOSED"
      ) {
        setTicketStatus(ticket.status);
      }
      if (typeof ticket.feedbackRating === "number") {
        setFeedbackRating(ticket.feedbackRating);
        setDraftRating(ticket.feedbackRating);
      } else {
        setFeedbackRating(null);
        setDraftRating(0);
      }
    }
  } catch (error) {
    setMessages((prev) => prev.filter((msg) => msg.id !== optimisticId));
    if (selectedFile && selectedPreviewUrl) {
      setAttachmentFile(selectedFile);
      setAttachmentPreviewUrl(selectedPreviewUrl);
      setInputText(text);
    } else if (selectedPreviewUrl) {
      URL.revokeObjectURL(selectedPreviewUrl);
    }
    const message =
      error instanceof Error && error.message.trim()
        ? error.message
        : "Gagal upload/kirim pesan. Cek CORS bucket dan konfigurasi S3.";
    alert(message);
  }
};

const onPickAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("Attachment harus berupa gambar.");
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("Ukuran gambar maksimal 5MB.");
    return;
  }
  if (attachmentPreviewUrl) {
    URL.revokeObjectURL(attachmentPreviewUrl);
  }
  setAttachmentFile(file);
  setAttachmentPreviewUrl(URL.createObjectURL(file));
};

const clearAttachment = () => {
  if (attachmentPreviewUrl) {
    URL.revokeObjectURL(attachmentPreviewUrl);
  }
  setAttachmentPreviewUrl(null);
  setAttachmentFile(null);
  if (attachmentInputRef.current) {
    attachmentInputRef.current.value = "";
  }
};

const closeTicketByUser = async () => {
  if (ticketStatus === "CLOSED") return;

  setClosingTicket(true);
  try {
    const res = await fetch(`/api/tickets/${ticketId}/close`, {
      method: "POST",
    });
    const payload = await parseJsonSafe<{
      status?: TicketStatus;
      feedbackRating?: number | null;
      error?: string;
    }>(res);
    if (!res.ok) {
      alert(payload?.error || "Gagal menyelesaikan tiket.");
      return;
    }
    setTicketStatus("CLOSED");
    if (typeof payload?.feedbackRating === "number") {
      setFeedbackRating(payload.feedbackRating);
      setDraftRating(payload.feedbackRating);
    } else {
      setFeedbackRating(null);
      setDraftRating(0);
    }
  } catch {
    alert("Koneksi terputus saat menutup tiket.");
  } finally {
    setClosingTicket(false);
    setShowCloseConfirm(false);
  }
};

const submitFeedback = async () => {
  if (ticketStatus !== "CLOSED" || draftRating < 1 || draftRating > 5) return;
  setSubmittingFeedback(true);
  try {
    const res = await fetch(`/api/tickets/${ticketId}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating: draftRating }),
    });
    const payload = await parseJsonSafe<{ feedbackRating?: number; error?: string }>(
      res
    );
    if (!res.ok) {
      alert(payload?.error || "Gagal mengirim feedback.");
      return;
    }
    if (typeof payload?.feedbackRating === "number") {
      setFeedbackRating(payload.feedbackRating);
    } else {
      setFeedbackRating(draftRating);
    }
  } catch {
    alert("Koneksi terputus saat mengirim feedback.");
  } finally {
    setSubmittingFeedback(false);
  }
};

  return (
    <div className="mx-auto flex h-[calc(100dvh-96px)] w-full max-w-3xl flex-col animate-in fade-in slide-in-from-bottom-4 duration-500 md:h-[calc(100dvh-120px)]">
      {/* Header Chat */}
      <div className="overflow-hidden rounded-t-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:rounded-t-3xl">
        <div className="flex flex-col gap-3 border-b border-slate-100 p-3 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between md:p-6">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <ArrowLeft className="size-5 text-slate-500" />
            </button>
            <div className="min-w-0">
              <h2 className="flex items-center gap-2 truncate text-sm font-bold text-slate-900 dark:text-white md:text-base">
                Diskusi Tiket {ticketId}
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </h2>
              <p className="flex items-center gap-1 text-[11px] text-slate-500 md:text-xs">
                <Clock className="size-3" />
                Biasanya membalas dalam 5 menit
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {ticketStatus !== "CLOSED" && (
              <button
                type="button"
                onClick={() => setShowCloseConfirm(true)}
                disabled={closingTicket}
                className="rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-100 disabled:opacity-60 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300 dark:hover:bg-emerald-500/20"
              >
                {closingTicket ? "Menyelesaikan..." : "Selesaikan Tiket"}
              </button>
            )}
            <button
              type="button"
              onClick={() => onBack()}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Beranda
            </button>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
              ticketStatus === "CLOSED"
                ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20"
                : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20"
            }`}>
              <CheckCircle2 className="size-3" />
              {getStatusLabel(ticketStatus)}
            </div>
          </div>
        </div>

        <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-800 md:px-6">
          <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-5">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Pelapor
              </p>
              <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                {ticketData.name}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Lokasi
              </p>
              <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                {ticketData.location}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Kategori
              </p>
              <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                {ticketData.category.split(" ")[0]}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Urgensi
              </p>
              <p
                className={`truncate text-sm font-medium ${
                  ticketData.urgency.includes("Mendesak")
                    ? "text-red-500"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {ticketData.urgency.split(" ")[0]}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Admin
              </p>
              <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-200">
                {assignedAdminName || "Belum ditugaskan"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Area Pesan */}
      <div className="flex-1 space-y-3 overflow-y-auto border-x border-slate-200 bg-slate-50/50 p-3 scrollbar-thin scrollbar-thumb-slate-200 dark:border-slate-800 dark:bg-slate-950/50 dark:scrollbar-thumb-slate-800 md:space-y-4 md:p-6">
        {loading && (
          <p className="text-center text-xs text-slate-400">
            Memuat percakapan...
          </p>
        )}
        {!loading && 
        messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div className={`flex max-w-[90%] flex-col md:max-w-[80%] ${msg.sender === "user" ? "items-end" : "items-start"}`}>
              <div 
                className={`rounded-2xl px-3 py-2.5 text-sm md:px-4 md:py-3 ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10" 
                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm"
                }`}
              >
                {msg.text ? <p>{msg.text}</p> : null}
                {msg.attachmentUrl ? (
                  <div className={msg.text ? "mt-2" : ""}>
                    <img
                      src={msg.attachmentUrl}
                      alt={msg.attachmentCaption || "Attachment"}
                      className="max-h-72 w-auto max-w-full rounded-lg border border-slate-200/40 object-contain dark:border-slate-700/50"
                    />
                    {msg.attachmentCaption ? (
                      <p className="mt-1 text-xs opacity-90">{msg.attachmentCaption}</p>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <span className={`mt-1 px-1 text-[10px] ${msg.sending ? "text-blue-400" : "text-slate-400"}`}>
                {msg.sending ? "Mengirim..." : msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Chat */}
      <div className="relative rounded-b-2xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:rounded-b-3xl md:p-4">
        {ticketStatus === "CLOSED" && (
          <div className="mb-3 rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/30 dark:bg-amber-500/10">
            <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
              {feedbackRating
                ? "Terima kasih, feedback Anda sudah kami terima."
                : "Tiket selesai. Mohon beri penilaian layanan (1-5 bintang)."}
            </p>
            <div className="mt-2 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  disabled={feedbackRating !== null || submittingFeedback}
                  onClick={() => setDraftRating(value)}
                  className="rounded-md p-1.5 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70 dark:hover:bg-amber-500/20"
                >
                  <Star
                    className={`size-5 ${
                      value <= (feedbackRating ?? draftRating)
                        ? "fill-amber-500 text-amber-500"
                        : "text-amber-300 dark:text-amber-500/50"
                    }`}
                  />
                </button>
              ))}
              {feedbackRating === null && (
                <button
                  type="button"
                  onClick={submitFeedback}
                  disabled={draftRating < 1 || submittingFeedback}
                  className="ml-2 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-600 disabled:opacity-60"
                >
                  {submittingFeedback ? "Mengirim..." : "Kirim Feedback"}
                </button>
              )}
            </div>
          </div>
        )}
        {attachmentPreviewUrl && (
          <div className="absolute inset-x-3 bottom-full z-20 mb-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 shadow-md dark:border-slate-700 dark:bg-slate-800 md:inset-x-4">
            <div className="flex items-start gap-3">
              <img
                src={attachmentPreviewUrl}
                alt="Preview attachment"
                className="h-16 w-16 rounded-md border border-slate-200 object-cover dark:border-slate-700"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {attachmentFile?.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {attachmentFile
                    ? `${formatMimeShort(attachmentFile.type)} • ${formatFileSize(attachmentFile.size)}`
                    : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={clearAttachment}
                className="rounded-md p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                aria-label="Hapus attachment"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        )}
        <form onSubmit={handleSendMessage} className="flex items-end gap-2 sm:gap-3">
          <input
            ref={attachmentInputRef}
            type="file"
            accept="image/*"
            onChange={onPickAttachment}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => attachmentInputRef.current?.click()}
            disabled={ticketStatus === "CLOSED"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            aria-label="Tambah gambar"
          >
            <Paperclip className="size-4" />
          </button>
          <label htmlFor="chat-input" className="sr-only">
            Tulis pesan chat
          </label>
          <input 
            id="chat-input"
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              ticketStatus === "CLOSED"
                ? "Tiket sudah selesai."
                : attachmentFile
                  ? "Tulis caption gambar..."
                  : "Ketik pesan..."
            } 
            className="h-11 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            disabled={ticketStatus === "CLOSED"}
          />
          <button 
            type="submit"
            aria-label="Kirim pesan"
            disabled={ticketStatus === "CLOSED"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 active:scale-95"
          >
            <Send className="size-5" />
          </button>
        </form>
        <p className="text-[10px] text-slate-400 text-center mt-3">
          Tim IT akan menerima notifikasi pesan Anda secara langsung.
        </p>
      </div>

      {showCloseConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="close-ticket-title"
          aria-describedby="close-ticket-desc"
        >
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h3 id="close-ticket-title" className="text-base font-bold text-slate-900 dark:text-white">
              Selesaikan Tiket?
            </h3>
            <p id="close-ticket-desc" className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Setelah tiket diselesaikan, chat akan dikunci dan Anda diminta memberi feedback layanan.
            </p>
            <div className="mt-5 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowCloseConfirm(false)}
                disabled={closingTicket}
                className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-60 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={closeTicketByUser}
                disabled={closingTicket}
                className="rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"              >
                {closingTicket ? "Menyelesaikan..." : "Ya, Selesaikan"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ChatRoutePage() {
  const router = useRouter();
  const [state, setState] = useState<PersistedChatState | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LAST_CHAT_STORAGE_KEY);
      if (!raw) {
        setState(null);
      } else {
        const parsed = JSON.parse(raw) as Partial<PersistedChatState>;
        if (typeof parsed.ticketId === "string" && parsed.ticketId) {
          setState({
            ticketId: parsed.ticketId,
            ticketData: parsed.ticketData ?? null,
          });
        } else {
          setState(null);
        }
      }
    } catch {
      setState(null);
    } finally {
      setReady(true);
    }
  }, []);

  if (!ready) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
        Memuat chat...
      </div>
    );
  }

  if (!state?.ticketId) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-sm dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-700 dark:text-slate-200">
          Belum ada tiket aktif untuk dibuka di halaman chat.
        </p>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <ChatPage
      onBack={() => router.push("/")}
      ticketId={state.ticketId}
      ticketData={
        state.ticketData || {
          name: "User",
          location: "-",
          title: "Kendala IT",
          category: "Lainnya",
          urgency: "Biasa",
        }
      }
    />
  );
}
