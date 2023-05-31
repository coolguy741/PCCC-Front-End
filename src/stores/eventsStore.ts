import { EventInput, EventSourceInput } from "@fullcalendar/core";
import { create } from "zustand";

/**
 * This is a store that contains calendar events data.
 */

const defaultEvents: EventSourceInput = [
  {
    title: "",
    theme: "",
    type: "note",
    description: "This is a note.",
    start: "2023-05-24T10:30:00Z",
    end: "2023-05-24T16:30:00Z",
    textColor: "#F87C56",
    backgroundColor: "#FEE5DD",
    borderColor: "#ff0000",
    display: "block",
  },
  {
    title: "Chocolate",
    theme: "Garden Guardian",
    type: "mealtime",
    description: "This is a Mealtime Moment.",
    start: "2023-05-18T12:30:00Z",
    end: "2023-05-18T20:30:00Z",
    textColor: "#DE9200",
    backgroundColor: "#FFEFBF",
    borderColor: "#B97A00",
    display: "block",
  },
  {
    title: "Chocolate",
    theme: "Garden Guardian",
    type: "assessment",
    description: "This is a Lesson Assessment.",
    start: "2023-05-20T14:30:00Z",
    end: "2023-05-20T18:30:00Z",
    textColor: "#DE9200",
    backgroundColor: "#FFEFBF",
    borderColor: "#B97A00",
    display: "block",
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
