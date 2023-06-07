import { EventInput } from "@fullcalendar/core";
import { create } from "zustand";

interface MergedEventInput extends EventInput {
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  display: string;
}

export const useCalendarEventsStore = create<{
  events: MergedEventInput[];
  addEvent: (event: MergedEventInput) => void;
  removeEvent: (event: MergedEventInput) => void;
  removeEvents: () => void;
}>()((set) => ({
  events: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  removeEvent: (event) =>
    set((state) => ({ events: state.events.filter((e) => e.id !== event.id) })),
  removeEvents: () => set({ events: [] }),
}));
