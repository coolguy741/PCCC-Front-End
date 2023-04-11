import { Uploader } from '../../Uploader';

export const TopicForm = () => {
  return (
    <div className="flex space-x-6 justify-between">
      <div className="w-full">
        <div>
          <div>
            <label>Title</label>
          </div>
          <input className="w-full" placeholder="Garden Guardian" />
        </div>
        <div>
          <div>
            <label>Intro</label>
          </div>
          <textarea className="w-full" rows={5}>
            Can you spot the difference between a shovel and a trowel, or tell
            which wild mushrooms are safe to eat? This lesson contains 3
            activities that give participants the foundational knowledge needed
            to understand the terminology, tools and safety considerations for
            growing at home or
          </textarea>
        </div>
        <div>
          <div>
            <label>Safety Tips</label>
          </div>
          <textarea className="w-full" rows={10}>
            Garden Guardian safety tips and guidance can be found in all Power
            Full Kids lessons. Watch for the Garden Guardian section and stay
            safe when you grow.
          </textarea>
        </div>
      </div>
      <div className="flex">
        <Uploader />
      </div>
    </div>
  );
};
