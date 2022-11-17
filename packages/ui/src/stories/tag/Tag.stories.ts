import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';
import Tag from './Tag.vue';

export default {
  title: 'Tag',
  component: Tag,
  decorators: [withDesign],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'default', 'large'] },
      description: 'Tag size',
    },
    type: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'danger'],
      },
      description: 'Component type',
    },
    effect: {
      control: { type: 'select', options: ['dark', 'light', 'plain'] },
      description: 'Component theme',
    },
    closable: {
      control: { type: 'boolean' },
      description: 'Whether Tag can be removed',
    },
    srcRight: {
      control: { type: 'text' },
      description: 'Url for right img',
    },
    srcLeft: {
      control: { type: 'text' },
      description: 'Url for left img',
    },
  },
};

const Template = (args: any) => ({
  components: { Tag },
  setup() {
    return { args };
  },
  template: '<Tag  v-bind="args" />',
});

export const Basic: Story = Template.bind({});
Basic.args = {
  text: 'tag',
  size: 'default',
  effect: 'light',
  closable: false,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7461%3A178507',
  },
};
export const RemovableTag: Story = Template.bind({});
RemovableTag.args = {
  text: 'Removable',
  size: 'default',
  effect: 'light',
  closable: true,
};
RemovableTag.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7461%3A178507',
  },
};
export const TagWithRightImg: Story = Template.bind({});
TagWithRightImg.args = {
  ...Basic.args,
  size: 'large',
  text: 'Default',
  srcRight:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};
TagWithRightImg.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7461%3A178507',
  },
};
export const TagWithLeftImg: Story = Template.bind({});
TagWithLeftImg.args = {
  ...Basic.args,
  size: 'large',
  text: 'Default',
  srcLeft:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};
TagWithLeftImg.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7461%3A178507',
  },
};
