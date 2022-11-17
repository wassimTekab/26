import { ElBadge, ElButton } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Badge',
  component: ElBadge,
  decorators: [withDesign],
  argTypes: {
    value: {
      description: 'string - number | display value ',
      control: {
        type: 'select',
        options: ['new', 20, 100],
      },
    },
    max: {
      description:
        "number | maximum value, shows '{max}+' when exceeded. Only works if value is a Number",
      control: {
        type: 'number',
      },
    },
    type: {
      description: 'string | badge type',
      control: {
        type: 'select',
        options: ['primary', 'success', 'info', 'warning', 'danger'],
      },
    },
    'is-dot': {
      description: 'boolean | if a little dot is displayed',
      control: 'boolean',
    },
    hidden: {
      description: 'boolean | hidden badge',
      control: 'boolean',
    },
  },
};

const Template = (args: any) => ({
  components: { ElBadge, ElButton },
  setup() {
    return { args };
  },
  template: `
  <el-badge v-bind="args">
    <el-button>comments</el-button>
  </el-badge>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  value: 'new',
  max: 50,
  'is-dot': false,
  hidden: false,
  type: 'danger',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=8388%3A158469',
  },
};
