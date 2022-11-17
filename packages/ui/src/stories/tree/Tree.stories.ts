import { ElTree, ElInput } from 'element-plus';
import { Story } from '@storybook/vue3';
import { ref, watch } from 'vue';

export default {
  title: 'Tree',
  component: ElTree,
  argTypes: {
    'render-after-expand': { control: 'boolean', description: 'whether to render child nodes only after a parent node is expanded for the first time' },
    'highlight-current': { control: 'boolean', description: 'whether current node is highlighted' },
    'expand-on-click-node': { control: 'boolean', description: 'whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.' },
    accordion: { control: 'boolean', description: 'whether only one node among the same level can be expanded at one time' },
    draggable: { control: 'boolean', description: 'whether enable tree nodes drag and drop' },
    'show-checkbox': { control: 'boolean', description: 'whether node is selectable' },
    'default-expand-all': { control: 'boolean', description: 'array of keys of initially expanded nodes' },
    indent: { control: 'number', description: 'horizontal indentation of nodes in adjacent levels in pixels' },
    data: { description: 'tree data' },
    props: { description: 'configuration options(label, children,disabled...)' },
    '@filter-node-method': { description: 'this function will be executed on each node when use filter method. if return false, tree node will be hidden.' },
  },
};
export interface Tree {
  label: string,
  disabled ?:boolean,
  id?:number,
  children?: Tree[],
}

// Basic

const Template = (args: any) => ({
  components: { ElTree },
  setup() {
    const data: Tree[] = [
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
                disabled: true,
              },
            ],
          },
        ],
      },

    ];

    const defaultProps = {
      children: 'children',
      label: 'label',
    };
    return {
      args, defaultProps, data,
    };
  },
  template: '<el-tree :data="data" :props="defaultProps"  v-bind="args"/>',
});

export const Normal: Story = Template.bind({});
Normal.args = {
  'render-after-expand': true,
  'highlight-current': true,
  'expand-on-click-node': true,
  accordion: true,
  draggable: true,
  'show-checkbox': true,
  indent: 16,
};

// Filtered

const TreeFilteringTemplate = (args: any) => ({
  components: { ElTree, ElInput },
  setup() {
    const filterText = ref('');
    const treeRef = ref<InstanceType<typeof ElTree>>();

    const defaultProps = {
      children: 'children',
      label: 'label',
    };

    watch(filterText, (val) => {
      treeRef.value!.filter(val);
    });

    const filterNode = (value: string, data: Tree) => {
      if (!value) return true;
      return data.label.includes(value);
    };

    const data: Tree[] = [
      {
        id: 1,
        label: 'Level one 1',
        children: [
          {
            id: 4,
            label: 'Level two 1-1',
            children: [
              {
                id: 9,
                label: 'Level three 1-1-1',
              },
              {
                id: 10,
                label: 'Level three 1-1-2',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: 'Level one 2',
        children: [
          {
            id: 5,
            label: 'Level two 2-1',
          },
          {
            id: 6,
            label: 'Level two 2-2',
          },
        ],
      },

    ];
    return {
      args, defaultProps, filterNode, data, filterText, treeRef,
    };
  },
  template: `<el-input v-model="filterText" placeholder="Filter keyword" />
      <el-tree
        v-bind="args"
        ref="treeRef"
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        :filter-node-method="filterNode"
        />`,
});

export const TreeFiltering: Story = TreeFilteringTemplate.bind({});
TreeFiltering.args = {
  ...Normal.args,
  'default-expand-all': false,
};
