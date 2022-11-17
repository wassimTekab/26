import { ElMessage, ElButton } from 'element-plus';
import { Story } from '@storybook/vue3';

export default {
  title: 'Message',
  component: ElMessage,
  argTypes: {
    message: { control: 'text', description: 'message text' },
    type: { control: { type: 'select', options: ['info', 'success', 'warning', 'error'] }, description: 'message type' },
    center: { control: 'boolean', description: 'whether to center the text' },
    showClose: { control: 'boolean', description: 'whether to show a close button' },
    grouping: { control: 'boolean', description: 'merge messages with the same content, type of VNode message is not supported' },
    offset: { control: 'number', description: 'set the distance to the top of viewport' },
    duration: { control: 'number', description: 'display duration, millisecond. If set to 0, it will not turn off automatically' },
  },
};

const Template = (args: any) => ({
  components: { ElMessage, ElButton },
  setup() {
    const open = () => {
      ElMessage({
        message: args.message,
        type: args.type,
        showClose: args.showClose,
        center: args.center,
        grouping: args.grouping,
        duration: args.duration,
        offset: args.offset,
      });
    };

    return { open };
  },
  template: '<el-button :plain="true" @click="open">Show message</el-button>',
});

export const Normal: Story = Template.bind({});
Normal.args = {
  message: 'hello nejah',
  type: 'info',
  center: false,
  showClose: true,
  grouping: true,
  duration: 3000,
  offset: 20,
};
