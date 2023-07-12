import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeedbackSlider, IFeedbackSliderProps } from "./FeedbackSlider";

export default {
  title: "shared/FeedbackSlider",
  component: FeedbackSlider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FeedbackSlider>;

const StorybookComponent: ComponentStory<typeof FeedbackSlider> = (args) => (
  <FeedbackSlider {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
} as IFeedbackSliderProps;
