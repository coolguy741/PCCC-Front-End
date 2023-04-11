import styled from 'styled-components';

export const TopicIntro = () => {
  return (
    <Style.Container>
      <div>
        <h4>Garden Guardian</h4>
        <p>
          Can you spot the difference between a shovel and a trowel, or tell
          which wild mushrooms are safe to eat? This lesson contains 3
          activities that give participants the foundational knowledge needed to
          understand the terminology, tools and safety considerations for
          growing at home or foraging for food in nature.
        </p>
        <h5>Safety Tips</h5>
        <p>
          Garden Guardian safety tips and guidance can be found in all Power
          Full Kids lessons. Watch for the Garden Guardian section and stay safe
          when you grow.
        </p>
      </div>
      <div className="image-container"></div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    gap: 10px;

    & > .image-container {
      width: 500px;
      height: 200px;
      background: var(--black);
    }
  `,
};
