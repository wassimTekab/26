import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import * as Icons from '@element-plus/icons-vue';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Breadcrumb',
  component: { Icons },
  decorators: [withDesign],

  argTypes: {
    separator: {
      description: 'string | separator character',
      control: { type: 'text' },
    },
    'separator-icon': {
      description:
        'string - Component | icon component of icon separator, it will cover separator',
      control: { type: 'select', options: Object.keys(Icons) },
    },
    to: {
      description: 'string - object | target route of the link, same as to of vue-router',
      control: { type: 'object' },
    },
    replace: {
      description: 'string | if true, the navigation will not leave a history record',
      control: { type: 'boolean' },
    },
  },
};

const Template = (args: any) => ({
  components: { ElBreadcrumb, ElBreadcrumbItem },
  setup() {
    return { args, ...Icons };
  },
  template: `
  <div >
  <el-breadcrumb v-bind="args" :separator-icon="${args['separator-icon']}">
        <el-breadcrumb-item :to="args.to" :replace="args.replace">homepage</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb> </div>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  separator: '//',
  'separator-icon': '',
  to: { path: '/' },
  replace: false,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9179%3A169355',
  },
};
