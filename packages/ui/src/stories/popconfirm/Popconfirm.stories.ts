import { Story } from '@storybook/vue3';
import { ElPopconfirm, ElButton } from 'element-plus';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Popconfirm',
  component: ElPopconfirm,
  decorators: [withDesign],
  argTypes: {
    title: {
      description: 'Title',
    },
    confirmButtonText: {
      description: 'Confirm button text',
    },
    cancelButtonText: {
      description: 'Cancel button text',
    },
    confirmButtonType: {
      control: {
        type: 'select',
        options: ['default', 'success', 'info', 'warning', 'danger'],
      },
      description: 'Confirm button type',
    },
    cancelButtonType: {
      control: {
        type: 'select',
        options: ['default', 'success', 'info', 'warning', 'danger'],
      },
      description: 'Cancel button type',
    },
  },
};

const Template: Story = (args: any) => ({
  components: { ElPopconfirm, ElButton },
  setup() {
    return { args };
  },
  template: `
  <el-popconfirm title="Are you sure to delete this?">
    <template #reference>
      <el-button type="info">Delete</el-button>
    </template>
  </el-popconfirm>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  title: 'are you sure to delete this ?',
  confirmButtonText: 'OK',
  cancelButtonText: 'No , thanks',
  confirmButtonType: 'danger',
  cancelButtonType: 'success',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5629%3A206948',
  },
};
