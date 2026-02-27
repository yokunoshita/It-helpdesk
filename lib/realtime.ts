type RealtimeMessage = {
  id: string;
  ticketId: string;
  sender: string;
  message: string;
  createdAt: Date;
  attachmentUrl?: string | null;
  attachmentCaption?: string | null;
  attachmentMimeType?: string | null;
  attachmentFileName?: string | null;
  attachmentSize?: number | null;
};

type Subscriber = (message: RealtimeMessage) => void;
export type AdminRealtimeEvent = {
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
  status?: "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
};
type AdminSubscriber = (event: AdminRealtimeEvent) => void;

export type AdminPresenceEvent = {
  id: string;
  adminId: string;
  username: string;
  name: string;
  active: boolean;
  isOnline: boolean;
  createdAt: string;
  updatedAt: string;
};
type AdminPresenceSubscriber = (event: AdminPresenceEvent) => void;

const globalRealtime = global as unknown as {
  ticketSubscribers?: Map<string, Set<Subscriber>>;
  adminSubscribers?: Set<AdminSubscriber>;
  adminPresenceSubscribers?: Set<AdminPresenceSubscriber>;
};

const subscribers = globalRealtime.ticketSubscribers || new Map<string, Set<Subscriber>>();
if (!globalRealtime.ticketSubscribers) {
  globalRealtime.ticketSubscribers = subscribers;
}
const adminSubscribers = globalRealtime.adminSubscribers || new Set<AdminSubscriber>();
if (!globalRealtime.adminSubscribers) {
  globalRealtime.adminSubscribers = adminSubscribers;
}
const adminPresenceSubscribers =
  globalRealtime.adminPresenceSubscribers || new Set<AdminPresenceSubscriber>();
if (!globalRealtime.adminPresenceSubscribers) {
  globalRealtime.adminPresenceSubscribers = adminPresenceSubscribers;
}

export const publishTicketMessage = (ticketId: string, message: RealtimeMessage) => {
  const set = subscribers.get(ticketId);
  if (!set) return;
  for (const notify of set) {
    try {
      notify(message);
    } catch (error) {
      console.error("Ticket subscriber callback failed:", error);
    }
  }
};

export const subscribeTicketMessages = (ticketId: string, subscriber: Subscriber) => {
  const set = subscribers.get(ticketId) || new Set<Subscriber>();
  set.add(subscriber);
  subscribers.set(ticketId, set);

  return () => {
    const current = subscribers.get(ticketId);
    if (!current) return;
    current.delete(subscriber);
    if (current.size === 0) {
      subscribers.delete(ticketId);
    }
  };
};

export const publishAdminEvent = (event: AdminRealtimeEvent) => {
  for (const notify of adminSubscribers) {
    try {
      notify(event);
    } catch (error) {
      console.error("Admin subscriber callback failed:", error);
    }
  }
};

export const subscribeAdminEvents = (subscriber: AdminSubscriber) => {
  adminSubscribers.add(subscriber);
  return () => {
    adminSubscribers.delete(subscriber);
  };
};

export const publishAdminPresenceEvent = (event: AdminPresenceEvent) => {
  for (const notify of adminPresenceSubscribers) {
    try {
      notify(event);
    } catch (error) {
      console.error("Admin presence subscriber callback failed:", error);
    }
  }
};

export const subscribeAdminPresenceEvents = (
  subscriber: AdminPresenceSubscriber
) => {
  adminPresenceSubscribers.add(subscriber);
  return () => {
    adminPresenceSubscribers.delete(subscriber);
  };
};
