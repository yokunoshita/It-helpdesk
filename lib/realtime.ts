type RealtimeMessage = {
  id: string;
  ticketId: string;
  sender: string;
  message: string;
  createdAt: Date;
};

type Subscriber = (message: RealtimeMessage) => void;
export type AdminRealtimeEvent = {
  id: string;
  type: "ticket_created" | "user_message";
  ticketId: string;
  ticketCode: string;
  title: string;
  message: string;
  createdAt: string;
};
type AdminSubscriber = (event: AdminRealtimeEvent) => void;

const globalRealtime = global as unknown as {
  ticketSubscribers?: Map<string, Set<Subscriber>>;
  adminSubscribers?: Set<AdminSubscriber>;
};

const subscribers = globalRealtime.ticketSubscribers || new Map<string, Set<Subscriber>>();
if (!globalRealtime.ticketSubscribers) {
  globalRealtime.ticketSubscribers = subscribers;
}
const adminSubscribers = globalRealtime.adminSubscribers || new Set<AdminSubscriber>();
if (!globalRealtime.adminSubscribers) {
  globalRealtime.adminSubscribers = adminSubscribers;
}

export const publishTicketMessage = (ticketId: string, message: RealtimeMessage) => {
  const set = subscribers.get(ticketId);
  if (!set) return;
  for (const notify of set) {
    notify(message);
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
    notify(event);
  }
};

export const subscribeAdminEvents = (subscriber: AdminSubscriber) => {
  adminSubscribers.add(subscriber);
  return () => {
    adminSubscribers.delete(subscriber);
  };
};
