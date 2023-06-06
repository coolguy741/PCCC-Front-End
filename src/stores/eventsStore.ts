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
  removeEvents: () => void;
  addEvent: (event: MergedEventInput) => void;
}>()((set) => ({
  events: [],
  removeEvents: () => set({ events: [] }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
}));
