import { ElTooltip } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tooltip',
  components: ElTooltip,
  decorators: [withDesign],
  argTypes: {
    content: { description: 'display content, can be overridden by slot#content' },
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
      description: 'position of Tooltip',
    },
    effect: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Tooltip theme, built-in theme: dark / light',
    },
    trigger: {
      control: { type: 'select', options: ['hover', 'click'] },
      description: 'How should the tooltip be triggered (to show)',
    },
    hideAfter: { description: 'unité/ms' },
  },
};

const Template = (args :any) => ({
  components: { ElTooltip },
  setup() {
    return { args };
  },
  template: ' <el-tooltip  :content="args.content" :placement="args.placement" :effect="args.effect" :trigger="args.trigger" :hide-after="args.hideAfter">tooltip<el-tooltip />',
});

export const Normal : Story = Template.bind({});
Normal.args = {
  content: 'tooltip1',
  placement: 'right',
  effect: 'dark',
  trigger: 'hover',
  hideAfter: 1000,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=4117%3A93349',
  },
};
