import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';
import DropDown from './DropDown.vue';

export default {
  title: 'DropDown',
  component: DropDown,
  decorators: [withDesign],
  argTypes: {
    trigger: {
      control: { type: 'select', options: ['hover', 'click', 'contextmenu'] },
    },
    size: {
      control: { type: 'select', options: ['large', 'default', 'small'] },
    },
  },
};

const Template = (args: any) => ({
  components: { DropDown },
  setup() {
    return { args };
  },
  template:
    '<DropDown :trigger="args.trigger" :size="args.size" :divided="args.divided" :disabled="args.disabled" :show-timeout="args.timeout"  />',
});

export const Basic: Story = Template.bind({});
Basic.args = {
  trigger: 'hover',
  size: 'default',
  divided: false,
  disabled: false,
  timeout: 250,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5629%3A206949',
  },
};
