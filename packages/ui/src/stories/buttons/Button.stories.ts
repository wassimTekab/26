import { ElButton } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Button',
  component: ElButton,
  decorators: [withDesign],
  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'info', 'warning', 'danger', 'default'],
      },
    },
    round: { control: 'boolean' },
    plain: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    color: { control: 'color' },
  },
};

const Template = (args: any) => ({
  components: { ElButton },
  setup() {
    return { args };
  },
  template: '<el-button v-bind="args" style="borderStyle : none">Click me</el-button>',
});

export const Normal: Story = Template.bind({});
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8xTrTZs0KCyYyPlQUxSvst/Element-Plus-Design-System(Components)-(Community)?node-id=6569%3A143077',
  },
};
Normal.args = {
  size: 'default',
  type: 'primary',
  round: false,
  plain: false,
  disabled: false,
  loading: false,
  color: '',
};
