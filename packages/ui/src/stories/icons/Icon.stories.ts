import { Story } from '@storybook/vue3';
import { Edit } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
import Icon from './IconPack.vue';

export default {
  title: 'Icons',
  component: Icon,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
  },
};

const Template = (args: any) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  // the `args` are bound to your component with `v-bind="args"`
  template: '<Icon v-bind="args"></Icon>',
});

const IconTemplate = (args: any) => ({
  components: { Edit, ElIcon },
  setup() {
    return { args };
  },
  // the `args` (color and size) are bound to your component with `v-bind="args"`
  template: `<h1>${Edit.name}</h1><br/>
  <el-icon v-bind="args"> 
     <Edit/>
  </el-icon>`,
});

export const Normal: Story = IconTemplate.bind({});
Normal.args = {
  size: 100,
  color: 'black',
};

export const IconsPack: Story = Template.bind({});
IconsPack.args = {
  size: 100,
  color: 'black',
};
