import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';
import { ElTree } from 'element-plus';

export default {
  title: 'Expandable-container',
  component: { ElTree },
  decorators: [withDesign],
  argTypes: {
    data: {
      description:
    '{ label: string; children : []; }[]',
    },
    accordion: {
      description: 'whether only one node among the same level can be expanded at one time',
      control: { type: 'boolean' },
    },
    defaultExpandAll: {
      description: 'whether to expand all nodes by default',
      control: { type: 'boolean' },
    },
    showCheckbox: {
      description: 'whether node is selectable',
      control: { type: 'boolean' },
    },
    checkStrictly: {
      description: 'whether checked state of a node not affects its father and child nodes when show-checkbox is true',
      control: { type: 'boolean' },
    },
  },
};

const Template = (args: any) => ({
  components: { ElTree },
  setup() {
    return { args };
  },
  template:
    '  <el-tree v-bind="args" />   ',
});

export const Normal: Story = Template.bind({});
Normal.args = {
  data: [
    {
      label: 'Level one 1',
      children: [
        {
          label: 'Level two 1-1',
          children: [
            {
              label: 'Level three 1-1-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 2',
      children: [
        {
          label: 'Level two 2-1',
          children: [
            {
              label: 'Level three 2-1-1',
            },
          ],
        },
        {
          label: 'Level two 2-2',
          children: [
            {
              label: 'Level three 2-2-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 3',
      children: [
        {
          label: 'Level two 3-1',
          children: [
            {
              label: 'Level three 3-1-1',
            },
          ],
        },
        {
          label: 'Level two 3-2',
          children: [
            {
              label: 'Level three 3-2-1',
            },
          ],
        },
      ],
    },
    {
      label: 'Level one 3',
      children: [
        {
          label: 'Level two 3-1',
          children: [
            {
              label: 'Level three 3-1-1',
            },
          ],
        },
        {
          label: 'Level two 3-2',
          children: [
            {
              label: 'Level three 3-2-1',
            },
          ],
        },
      ],
    },
  ],
  accordion: true,
  defaultExpandAll: false,
  showCheckbox: false,
  checkStrictly: false,
};
