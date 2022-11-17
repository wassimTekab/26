import { ElProgress } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Progress-Bar',
  decorators: [withDesign],

  component: ElProgress,
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'exception'],
        description: 'The current status of progress bar',
      },
    },
    'text-inside': {
      control: {
        type: 'boolean',
        description:
          'Whether to place the percentage inside progress bar, only works when type is line',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['circle', 'line'],
        description: 'The type of progress bar',
      },
    },
  },
};

const Template = (args: any) => ({
  components: { ElProgress },
  setup() {
    // eslint-disable-next-line no-confusing-arrow
    const format = (percentage: number) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      percentage === 100 ? 'Full' : `${percentage}%`;
    return { args, format };
  },
  template:
    '<el-progress :percentage="args.percentage" :text-inside="args[\'text-inside\']" :stroke-width="args.height" :status="args.status" :type="args.type" :color="args.color"/>',
});

export const Normal: Story = Template.bind({});
Normal.args = {
  percentage: 50,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7496%3A172997',
  },
};
