import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';
import { ref } from 'vue';
import Clipboard from './Clipboard.vue';

export default {
  title: 'clipboard',
  component: { Clipboard },
  decorators: [withDesign],
  argTypes: {
    Clipboard: { control: 'text', description: 'text' },
    text: { control: 'text', description: 'text to copy' },
    feedback: { control: 'text', description: 'feedback text' },
    content: { control: 'text', description: 'Tooltip content' },
    placement: {
      control: {
        type: 'select',
        options: [
          'top-start',
          'top',
          'top-end',
          'right-start',
          'right',
          'right-end',
          'left-start',
          'left',
          'left-end',
          'bottom-start',
          'bottom',
          'bottom-end',
        ],
      },
      description: 'Position of Tooltip',
    },
    effect: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Tooltip theme, built-in theme: dark / light',
    },

  },
};

const Template = (args: any) => ({
  components: { Clipboard },
  setup() {
    return { args };
  },
  template: ' <Clipboard v-bind="args" />',
});

export const Simple: Story = Template.bind({});
Simple.args = {
  text: 'Copy',
  Clipboard: 'Click to copy',
};
export const withFeedback: Story = Template.bind({});
withFeedback.args = {
  text: 'Copy',
  Clipboard: 'Not yet copied',
  feedback: 'Copied',
};
export const Tooltips: Story = Template.bind({});
Tooltips.args = {
  text: 'Copy',
  Clipboard: 'Click to copy',
  content: 'Copy Text',
  effect: 'light',
  placement: 'bottom',
};
