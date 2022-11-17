import { Story } from '@storybook/vue3';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';
import Collapse from './ElCollapse.vue';

export default {
  title: 'Collapse',
  component: Collapse,
  decorators: [withDesign],
  argTypes: {
    title: { control: 'text', description: 'Title of the panel' },
    name: {
      control: 'text',
      description: 'Unique identification of the panel',
    },
    accordion: {
      control: 'boolean',
      description: 'In accordion mode, only one panel can be expanded at once',
      defaultValue: false,
    },
    disabled: { control: 'boolean', description: 'Disable the collapse item' },
    '@change': {
      description: 'Triggers when active panels change',
    },
  },
};

const Template = (args: any) => ({
  components: { Collapse },
  setup() {
    return { args };
  },
  template:
    '<Collapse :title="args.title" :disabled="args.disabled" :name="args.name" @click="action" />',
  methods: {
    action: action('clicked'),
  },
});

export const Basic: Story = Template.bind({});
Basic.args = {
  title: 'Consistency',
  disabled: false,
  name: '1',
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7477%3A172860',
  },
};
