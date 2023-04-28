import { EventInput, EventSourceInput } from "@fullcalendar/core";
import { create } from "zustand";

/**
 * This is a store that contains calendar events data.
 */

const defaultEvents: EventSourceInput = [
  {
    title: "Group A",
    start: "2023-04-15",
    duration: "02:00",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting1",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting2",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting3",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting4",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting5",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting6",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
  {
    title: "Meeting7",
    start: "2023-04-18",
    type: "mealtime",
    description: "Lecture",
  },
];

export const useCalendarEventsStore = create<{
  events: EventInput[];
  addEvent: (event: EventInput) => void;
  getEvents: () => void;
}>()((set) => ({
  events: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  getEvents: () => set({ events: defaultEvents }),
}));
