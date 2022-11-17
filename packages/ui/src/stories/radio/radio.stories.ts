import { Story } from '@storybook/vue3';
import { ElRadio, ElRadioGroup } from 'element-plus';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Radio',
  component: ElRadio,
  decorators: [withDesign],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

const Template = (args: any) => ({
  components: { ElRadio, ElRadioGroup },
  setup() {
    const radio = ref('');
    const options = ref([
      {
        value: 'valueOptionA',
        disabled: 'disabledOptionA',
        border: 'borderOptionA',
        label: 'labelOption1',
      },
      {
        value: 'valueOptionB',
        disabled: 'disabledOptionB',
        border: 'borderOptionB',
        label: 'labelOption2',
      },
      {
        value: 'valueOptionC',
        disabled: 'disabledOptionC',
        border: 'borderOptionC',
        label: 'labelOption3',
      },
    ]);
    return { args, radio, options };
  },
  template: `
  <el-radio-group v-model="radio" :size="args.size" >
  <el-radio v-for="(option,index) in options"  :label="args[option.value]" :disabled="args[option.disabled]" :border="args[option.border]" :key="index">{{args[option.label]}}</el-radio>
  </el-radio-group>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  labelOption1: 'label 1 ',
  labelOption2: 'label 2 ',
  labelOption3: 'label 3 ',
  valueOptionA: 'option A',
  valueOptionB: 'option B',
  valueOptionC: 'option C',
  disabledOptionA: false,
  disabledOptionB: false,
  disabledOptionC: false,
  borderOptionA: false,
  borderOptionB: false,
  borderOptionC: false,
  size: 'medium',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5629%3A206866',
  },
};
