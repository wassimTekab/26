import {
  ElMessage, ElMessageBox, Action, ElButton,
} from 'element-plus';
import { Story } from '@storybook/vue3';

export default {
  title: 'MessageBox',
  component: ElMessage,
  argTypes: {
    title: { description: ' title of the MessagebOX' },
    message: { description: 'content of the massageBox' },
    type: { control: { type: 'select', options: ['warning', 'success', 'error', 'info'] }, description: 'message type, used for icon display' },
    draggable: { control: 'boolean', description: 'whether MessageBox is draggable (not available in Alert storie)' },
    showClose: { control: 'boolean', description: 'whether to show close icon of MessageBox (not available in Alert storie)' },
    center: { control: 'boolean', description: 'whether to align the content in center (not available in Alert storie)' },
    showCancelButton: { control: 'boolean', description: 'whether to show close icon of MessageBox (not available in Alert storie)' },
    '@callback': { description: "MessageBox closing callback if you don't prefer Promise" },
  },
};

// Alert

const AlertTemplate = (args: any) => ({
  components: { ElMessageBox, ElMessage, ElButton },
  setup() {
    const open = () => {
      ElMessageBox.alert(args.message, args.title, {
        confirmButtonText: 'OK',
        callback: (action: Action) => {
          ElMessage({
            type: args.type,
            message: `action: ${action}`,
          });
        },
      });
    };

    return { args, open };
  },
  template: '<el-button  @click="open">Open the Message Box</el-button>',
});
export const Alert: Story = AlertTemplate.bind({});
Alert.args = {
  message: 'this is message',
  title: 'Title',
  type: 'success',
};

// Confirm

const ConfirmTemplate = (args: any) => ({
  components: { ElMessageBox, ElMessage, ElButton },
  setup() {
    const open = () => {
      ElMessageBox.confirm(
        args.message,
        args.title,
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: args.type,
          showCancelButton: args.showCancelButton,
          draggable: args.draggable,
          showClose: args.showClose,
          center: args.center,
        },
      )
        .then(() => {
          ElMessage({
            type: 'success',
            message: 'Delete completed',

          });
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Delete canceled',
          });
        });
    };
    return { args, open };
  },
  template: '<el-button @click="open">Open the Message Box</el-button>',
});
export const Confirm: Story = ConfirmTemplate.bind({});
Confirm.args = {
  message: 'this is message',
  title: 'Title',
  type: 'success',
  draggable: false,
  showClose: false,
  center: false,
  showCancelButton: true,
};

//  Prompt
const PromptTemplate = (args: any) => ({
  components: { ElMessageBox, ElMessage, ElButton },
  setup() {
    const open = () => {
      ElMessageBox.prompt(args.message, args.title, {
        type: args.type,
        draggable: args.draggable,
        showClose: args.showClose,
        center: args.center,
        showCancelButton: args.showCancelButton,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern:
          /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
      })
        .then(({ value }) => {
          ElMessage({
            type: 'success',
            message: `Your email is:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: 'Input canceled',
          });
        });
    };

    return { args, open };
  },
  template: '<el-button @click="open">Open the Message Box</el-button>',
});
export const Prompt: Story = PromptTemplate.bind({});
Prompt.args = {
  ...Confirm.args,
};
