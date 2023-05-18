import { EventInput, EventSourceInput } from "@fullcalendar/core";
import { create } from "zustand";

/**
 * This is a store that contains calendar events data.
 */

const defaultEvents: EventSourceInput = [
  {
    title: "",
    type: "note",
    description: "Lorem ipsum",
    start: "2023-05-24T10:30:00Z",
    end: "2023-05-24T16:30:00Z",
    textColor: "#F87C56",
    backgroundColor: "#FEE5DD",
    display: "block",
  },
  {
    title: "",
    type: "mealtime",
    description: "Lorem ipsum",
    start: "2023-05-18T12:30:00Z",
    end: "2023-05-18T20:30:00Z",
    textColor: "#DE9200",
    backgroundColor: "#FFEFBF",
    display: "block",
  },
  {
    title: "",
    type: "assessment",
    description: "Lorem ipsum",
    start: "2023-05-20T14:30:00Z",
    end: "2023-05-20T18:30:00Z",
    textColor: "#DE9200",
    backgroundColor: "#FFEFBF",
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
