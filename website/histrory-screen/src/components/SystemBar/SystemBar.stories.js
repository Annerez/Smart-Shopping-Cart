import { SystemBar } from ".";

export default {
  title: "Components/SystemBar",
  component: SystemBar,
  argTypes: {
    device: {
      options: ["iphone-SE", "iphone-x"],
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
    device: "iphone-SE",
    theme: "dark",
    className: {},
    overlapGroupClassName: {},
    capacityClassName: {},
    wifi: "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/wifi.svg",
    cellularConnection:
      "https://cdn.animaapp.com/projects/61ef7aa2dd0b21a3ff5d423c/releases/6532585bb35383690516e023/img/cellular-connection.svg",
  },
};
