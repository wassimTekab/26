import { ElAlert, ElIcon } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Alert',
  component: ElAlert,
  decorators: [withDesign],
  argTypes: {

    type: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'error'],
      },
      description: 'Component type',
    },
    effect: {
      control: { type: 'select', options: ['dark', 'light'] },
      description: 'Choose theme',
    },
    'show-icon': { control: 'boolean', description: 'If a type icon is displayed' },
    'close-text': { description: 'Customized close button text' },
    center: { description: 'Whether to center the text' },
    description: { control: 'text', description: 'Descriptive text. Can also be passed with the default slot' },
    closable: { description: 'If closable or not' },
    title: { description: 'Title' },
  },

};

const Template = (args: any) => ({
  components: { ElAlert, ElIcon },
  setup() {
    return { args };
  },
  template: '<el-alert v-bind="args"></el-alert>',
});

export const Basic : Story = Template.bind({});
Basic.args = {
  title: 'alert',
  type: 'success',
  effect: 'light',
  center: false,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9030%3A170921',
  },
};
export const NonClosable : Story = Template.bind({});
NonClosable.args = {
  ...Basic.args,
  closable: false,
};
NonClosable.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9030%3A170921',
  },
};
export const CloseText : Story = Template.bind({});
CloseText.args = {
  ...Basic.args,
  closable: true,
  'close-text': 'close',
};
CloseText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9030%3A170921',
  },
};
export const WithIcon : Story = Template.bind({});
WithIcon.args = {
  ...Basic.args,
  'show-icon': true,
};
WithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9030%3A170921',
  },
};
export const WithDescription : Story = Template.bind({});
WithDescription.args = {
  ...Basic.args,
  description: 'this is description',

};
WithDescription.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9030%3A170921',
  },
};
