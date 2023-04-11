import { Calendar, TData } from '../Calendar';

const data: TData = {
  type: 'recipe',
  group: 'Garden',
  date: 11,
  topic: 'Garden Guardians',
  recipeName: 'Chocolate granola bites',
};

export const RecipeCalendar = () => {
  return (
    <div>
      <Calendar type="recipe" data={data} />
    </div>
  );
};
