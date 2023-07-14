import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeedbackSlider } from "./FeedbackSlider";

export default {
  title: "shared/FeedbackSlider",
  component: FeedbackSlider,
  argTypes: {},
} as ComponentMeta<typeof FeedbackSlider>;

const StorybookComponent: ComponentStory<typeof FeedbackSlider> = (args) => (
  <FeedbackSlider {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
