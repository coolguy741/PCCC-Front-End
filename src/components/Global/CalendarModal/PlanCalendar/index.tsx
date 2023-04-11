import { Calendar, TData } from '../Calendar';

const data: TData = {
  type: 'plan',
  group: 'Garden',
  week: 2,
  plans: [{ time: new Date(), meal: 'Chocolate' }],
};

export const PlanCalendar = () => {
  return (
    <div>
      <Calendar type="plan" data={data} />
    </div>
  );
};
