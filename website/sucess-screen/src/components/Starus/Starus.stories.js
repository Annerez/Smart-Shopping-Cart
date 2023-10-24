import { Starus } from ".";

export default {
  title: "Components/Starus",
  component: Starus,
  argTypes: {
    type: {
      options: ["time-red", "time-green", "time-blue", "time"],
      control: { type: "select" },
    },
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "time-red",
    theme: "dark",
    className: {},
    timeClassName: {},
  },
};
