import { ElNotification, ElButton } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Notification',
  component: ElNotification,
  decorators: [withDesign],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'info', 'error'],
      },
      description: 'notification type',
    },
    title: { description: 'title' },
    message: { description: 'description text' },
    duration: { description: 'duration before close. It will not automatically close if set 0' },
    position: { control: { type: 'select', options: ['bottom-right', 'bottom-left', 'top-left', 'top-right'] }, description: 'custom position' },
    showClose: { description: 'whether to show a close button' },
  },
};

const Template = (args: any) => ({
  components: { ElNotification, ElButton },
  setup() {
    const open1 = () => {
      ElNotification({
        title: args.title,
        message: args.message,
        duration: 0,
        type: args.type,
        position: args.position,
        showClose: args.showClose,
      });
    };
    return { args, open1 };
  },
  template: `<el-button plain   @click="open1">Show Notification</el-button>
  `,
});

export const Normal :Story = Template.bind({});
Normal.args = {
  type: 'success',
  title: 'hello',
  message: 'this is a reminder',
  duration: 0,
  position: 'top-left',
  showClose: true,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5629%3A206945',
  },
};
