import { ElTabs, ElTabPane } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Tab',
  component: ElTabs,
  decorators: [withDesign],
  argTypes: {
    'model-value': {
      description: 'string | binding value, name of the selected tab ',
      control: 'select',
      options: ['first', 'second'],
    },
    'tab-position': {
      description: 'string | position of tabs',
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    type: {
      description: 'string | type of Tab',
      control: {
        type: 'select',
        options: ['card', 'border-card'],
      },
    },
    stretch: {
      description:
        'boolean | whether width of tab automatically fits its container',
      control: 'boolean',
    },
    closable: {
      description:
        'boolean | whether Tab is closable - Only card type Tabs support closeable',
      control: 'boolean',
    },
    addable: {
      description:
        'boolean | whether Tab is addable - Only card type Tabs support addable',
      control: 'boolean',
    },
    editable: {
      description:
        'boolean | whether Tab is addable and closable - Only card type Tabs support editable',
      control: 'boolean',
    },
    '@tab-click': {
      description: 'Event(clicked tab)/ triggers when a tab is clicked',
    },
    '@tab-remove': {
      description:
        'Event(name of the removed tab) | triggers when tab-remove button is clicked',
    },
    '@tab-add': {
      description: 'Event | triggers when tab-add button is clicked',
    },
    '@edit': {
      description:
        'Event(targetName, action) | triggers when tab-add button or tab-remove is clicked',
    },
    label: { description: 'string | title of the tab', control: 'text' },
    name: {
      description:
        'string - number | identifier corresponding to the name of Tabs, representing the alias of the tab-pane',
      control: 'text',
    },
    disabled: {
      description: 'boolean | whether Tab is disabled',
      control: 'boolean',
    },
    lazy: {
      description: 'boolean | whether Tab is lazily rendered',
      control: 'boolean',
    },
  },
};

const Template = (args: any) => ({
  components: { ElTabs, ElTabPane },
  setup() {
    return { args };
  },
  template: `<el-tabs v-bind='args'>
  <el-tab-pane label='User' name='first'>User</el-tab-pane>
  <el-tab-pane label='Config' name='second'>Config</el-tab-pane>
  <el-tab-pane :label='args.label' :name='args.name' :disabled='args.disabled' :lazy="args.lazy" >Disabled</el-tab-pane>
</el-tabs>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  type: 'card',
  'tab-position': 'top',
  stretch: 'true',
  'model-value': 'second',
  closable: false,
  addable: false,
  editable: false,
  label: 'Disabled',
  name: 'third',
  disabled: true,
  lazy: false,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9915%3A151261',
  },
};
