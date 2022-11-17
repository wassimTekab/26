import { ElInput, ElIcon } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Input',
  component: ElInput,
  decorators: [withDesign],

  argTypes: {
    placeholder: { control: 'text' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Size of Input, works when type is not textarea',
    },
    type: {
      control: { type: 'select', options: ['password', 'text', 'email', 'textarea'] },
      description: 'Type of input',
    },
    clearable: { control: 'boolean', description: 'Whether to show clear button' },
    disabled: { control: 'boolean', description: 'Whether Input is disabled' },
    rows: { control: 'number', description: 'Number of rows of textarea, only works when type is textarea' },
    autosize: { control: 'boolean', description: 'Whether textarea has an adaptive height, only works when type is textarea. Can accept an object, e.g. { minRows: 2, maxRows: 6 }' },
    autocomplete: { control: 'text', description: 'Same as autocomplete in native input on/off' },
    autofocus: { control: 'boolean', description: 'Same as autofocus in native input' },
    maxlength: { control: 'number', description: 'The max length' },
    minlength: { control: 'number', description: 'Same as minlength in native input' },
    icon: { control: 'boolean', description: 'Add icons in Input' },
  },
};

const Template = (args: any) => ({
  components: { ElInput, Search, ElIcon },
  setup() {
    const input = ref('');
    return { args, input };
  },
  template:
`<el-input v-model="input" v-bind="args" :show-password="args.type === 'password' ? true : false">
<template #prefix v-if='args.icon'>
<el-icon class="el-input__icon"><search /></el-icon>
</template>
</el-input>`,

});

export const Basic: Story = Template.bind({});
Basic.args = {
  placeholder: 'Please input',
  icon: false,
  autocomplete: 'on',
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6640%3A144361',
  },
};
export const Disabled: Story = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6640%3A144361',
  },
};
export const Clearable: Story = Template.bind({});
Clearable.args = {
  ...Basic.args,
  clearable: true,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6640%3A144361',
  },
};
export const PasswordBox: Story = Template.bind({});
PasswordBox.args = {
  ...Basic.args,
  type: 'password',
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6640%3A144361',
  },
};
export const InputWithIcon: Story = Template.bind({});
InputWithIcon.args = {
  ...Basic.args,
  icon: true,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6640%3A144361',
  },
};
export const Textarea: Story = Template.bind({});
Textarea.args = {
  ...Basic.args,
  rows: 2,
  type: 'textarea',
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6640%3A144361',
  },
};
