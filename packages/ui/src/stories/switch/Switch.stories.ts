import { Story } from '@storybook/vue3';
import { ElSwitch } from 'element-plus';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Switch',
  component: ElSwitch,
  decorators: [withDesign],
  argTypes: {
    'active-color': { control: 'color' },
    inactiveColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ElSwitch },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: ' <el-switch v-bind="args" v-model="value" />',
});

export const Normal : Story = Template.bind({});
Normal.args = {
  'active-text': 'Open',
  'inactive-text': 'Close',
  width: 40,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=1743%3A56',
  },
};
