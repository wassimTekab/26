import {
  ElButton,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
} from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'shadowboxcta',
  component: {
    ElButton,
    ElCard,
    ElDescriptions,
    ElDescriptionsItem,
  },
  decorators: [withDesign],
  argTypes: {
    title: {
      description: 'title text, display on the top left',
      control: 'text',
    },
    label: {
      description: 'label text',
      control: 'text',
    },
    'body-style': {
      description: 'object | CSS style of body',
      control: 'object',
    },
    shadow: {
      description: 'string | when to show card shadows',
      control: {
        type: 'select',
        options: ['always', 'hover', 'never'],
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
    round: { control: 'boolean' },
    plain: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    color: { control: 'color' },
  },
};

const Template = (args: any) => ({
  components: {
    ElButton,
    ElCard,
    ElDescriptions,
    ElDescriptionsItem,
  },
  setup() {
    return { args };
  },
  template: `
    <el-card v-bind='args' >
      <div style='display:flex' >
      <el-descriptions v-bind='args' :style="{'margin-top': !args.label? '2%': '0.5%'}" style="width: 100%">
      <el-descriptions-item v-bind='args'/>
      </el-descriptions>
      <el-button v-bind="args" style="margin-top:1%"><b>Continue</b></el-button>
    </div>
    </el-card>
  `,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  size: 'large',
  round: true,
  plain: false,
  disabled: false,
  loading: false,
  color: '#148ff4',
  shadow: 'always',
  'body-style': { padding: '30px' },
  title: 'Composite component',
  label: 'Assemble a composite component out of simpler components',
};

export const WithoutMessageText: Story = Template.bind({});
WithoutMessageText.args = {
  size: 'large',
  round: true,
  plain: false,
  disabled: false,
  loading: false,
  color: '#148ff4',
  shadow: 'always',
  'body-style': { padding: '20px' },
  title: 'Composite component',
};
