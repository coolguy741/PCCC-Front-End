import styled from "styled-components";

export const TopicOverview = () => {
  return (
    <Style.Container>
      <div>
        <h4>Overview: With Great Power Comes Great Responsibility</h4>
        <p>
          Providing food for your loved ones is powerful. Throughout nature and
          history, providers have helped their family groups and communities
          thrive and survive. But when you’re planting your own crops, or
          forging for food in nature, the real power is knowledge. There are
          many things to know, and many ways to know them. Let’s start simple:
          knowing the right tool for the job. Check out Activity 1 to identify
          common growing tools and discuss what they’re used for.
        </p>
        <h4>Knowing how to stay safe</h4>
        <p>
          Once you’re familiar with the names and uses of common growing tools,
          the next thing to know is how to stay safe in the garden. Like any
          outdoor activity it’s important to stay hydrated and protect yourself
          from the sun with a hat and sunscreen. Here are some other tips for
          staying safe in the garden - simple as 1,2,3.
        </p>
        <p>
          1. Anytime you’re using metal or sharp tools, handle with care. Be
          aware of your surroundings so you don’t accidentally hit something or
          someone.
        </p>
        <p>
          2.Wearing gloves will help protect your hands, but if you notice a
          cut, make sure you wash your hands and cover the cut with a bandage to
          keep it clean.
        </p>
        <p>
          3. We share our gardens with the important critters that keep our
          environment healthy, but sometimes they can take an unwelcome bite. If
          you find yourself with a bug bite, don’t worry, it might itch but the
          irritation should go away overnight. If the bite changes in size or
          colour, or becomes sore, make sure you tell an adult.
        </p>
        <h4>Return to nature</h4>
        <p>
          Lastly, throughout the summer, we’re going to explore the world of
          food all around us, like the fruit trees that grow on your street, or
          wild blueberries in the woods. Gathering food from the environment is
          called foraging, the most important thing to know is how to know. How
          do we know when it’s safe to eat foraged food? In Activity 2 and 3
          we’ll explore foraging, and all the ways of knowing when it’s safe and
          when it’s not.
        </p>
      </div>
      <div className="image-container"></div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    & p {
      font-size: 0.75rem;
      margin: 0;
    }
    & h4 {
      margin-bottom: 2px;
    }
    & > .image-container {
      width: 500px;
      height: 200px;
      flex: initial;
      background: var(--black);
    }
  `,
};
