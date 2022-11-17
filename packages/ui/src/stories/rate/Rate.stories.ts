import { ElRate } from 'element-plus';
import { Story } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Rate',
  component: ElRate,

  argTypes: {
    max: { control: 'number', descrption: 'max rating score', description: 'max rating score' },
    size: { control: { type: 'select', options: ['large', 'default', 'small'] }, description: 'size of Rate' },
    disabled: { control: 'boolean', description: 'whether Rate is read-only' },
    'allow-half': { control: 'boolean', description: 'whether picking half start is allowed' },
    texts: { description: 'text array', default: "['Extremely bad', 'Disappointed', 'normal', 'Satisfied', 'great']" },
    'show-text': { control: 'boolean', description: 'whether to display texts', default: false },
    'show-score': { control: 'boolean', description: 'whether to display current score. show-score and show-text cannot be true at the same time' },
    'score-template': { control: 'text', description: 'score template' },
    '@change': { description: 'Triggers when rate value is changed' },
  },
};

const Template = (args: any) => ({
  components: { ElRate },
  setup() {
    const val = ref(4);
    return { args, val };
  },
  template: '<el-rate v-model="val" v-bind="args"/>',
});

export const Normal: Story = Template.bind({});
Normal.args = {
  max: 5,
  size: 'default',
  disabled: false,
  'allow-half': false,
};
export const RateText: Story = Template.bind({});
RateText.args = {
  ...Normal.args,
  'allow-half': false,
  texts: ['Extremely bad', 'Disappointed', 'normal', 'Satisfied', 'great'],
  'show-text': true,
};

export const ReadOnly: Story = Template.bind({});
ReadOnly.args = {
  ...Normal.args,
  disabled: true,
  'show-score': true,
  'score-template': '4 points',
};
