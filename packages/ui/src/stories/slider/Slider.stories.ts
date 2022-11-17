import { ElSlider } from 'element-plus';
import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Slider',
  component: ElSlider,
  decorators: [withDesign],
  argTypes: {
    size: { control: 'select', options: ['large', 'default', 'small'], description: 'size of the slider' },
    disabled: { control: 'boolean', description: 'whether Slider is disabled' },
    'show-input': { control: 'boolean', description: 'whether to display an input box, works when range is false' },
    'show-tooltip': { control: 'boolean', description: 'whether to display tooltip value' },
    'show-stops': { control: 'boolean', description: 'whether to display breakpoints' },
    step: { control: 'number', description: 'step size' },
    vertical: { control: 'boolean', description: 'vertical mode' },
    height: { control: 'text', description: 'Slider height, required in vertical mode /en pixel' },
    range: { control: 'boolean', description: 'whether to select a range' },
    min: { control: 'number', description: 'minimum value' },
    max: { control: 'number', description: 'maximum value' },

  },
};
// the basic Slider

const Template = (args: any) => ({
  components: { ElSlider },
  setup() {
    const value = ref(0);
    return { args, value };
  },
  template: '<el-slider v-model="value" v-bind="args"/>',
});

export const Basic: Story = Template.bind({});
Basic.args = {
  size: 'small',
  disabled: false,
  'show-input': false,
  'show-tooltip': false,
  'show-stops': true,
  step: 10,
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7562%3A176391',
  },
};

// vertical Slider

export const VerticalSlider: Story = Template.bind({});
VerticalSlider.args = {
  ...Basic.args,
  vertical: true,
  height: '200px',
};
VerticalSlider.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7562%3A176391',
  },
};
// slider with range
const Range = (args: any) => ({
  components: { ElSlider },
  setup() {
    const value = ref([2, 6]);
    return { args, value };
  },
  template: '<el-slider v-model="value" v-bind="args" />',
});

export const RangeSelection : Story = Range.bind({});
RangeSelection.args = {
  range: true,
  'show-stops': true,
};
RangeSelection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7562%3A176391',
  },
};
