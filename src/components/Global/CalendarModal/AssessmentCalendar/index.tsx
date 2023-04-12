import { Calendar, TData } from "../Calendar";

const data: TData = {
  type: "assessment",
  group: "Garden",
  date: 11,
  topic: "Garden Guardians",
  recipeName: "Chocolate granola bites",
};

export const AssessmentCalendar = () => {
  return (
    <div>
      <Calendar type="assessment" data={data} />
    </div>
  );
};
