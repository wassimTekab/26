import { ElDatePicker } from 'element-plus';
import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';
import DateTimePicker from './DateTimePicker.vue';

const disabledFutureDate = (time: Date) => time.getTime() > Date.now();
const disabledPassDate = (time: Date) => time.getTime() < Date.now();
export default {
  title: 'DatePicker',
  component: ElDatePicker,
  decorators: [withDesign],
  argTypes: {
    placeholder: { control: 'text', description: 'placeholder in non-range mode' },
    format: {
      control: { type: 'select', options: ['M/D/YYYY', 'YYYY-MM-DD', 'D MMMM YYYY', 'ddd, MMM D, YYYY', 'D MMMM YYYY hh:mm:ss'] },
      description: 'format of the displayed value in the input box',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'size of Input',
    },
    type: {
      control: { type: 'select', options: ['year', 'month', 'date', 'dates', 'daterange', 'datetime'] },
      description: 'type of the picker',
    },
    clearable: { control: 'boolean', description: 'whether to show clear button' },
    disabled: { description: 'whether DatePicker is disabled' },
    disabledDate: {
      control: 'select',
      options: [disabledPassDate, disabledFutureDate, false],
      description: 'a function determining if a date is disabled with that date as its parameter. Should return a Boolean',
    },
    editable: { description: 'whether the input is editable' },
  },
};

const Template = (args: any) => ({
  components: { ElDatePicker },
  setup() {
    const datePicker = ref('');

    return { args, datePicker, disabledPassDate };
  },
  template: '<el-datePicker  v-model="datePicker" v-bind="args" />',
});

export const Normal :Story = Template.bind({});
Normal.args = {
  placeholder: 'Pick a day',
  size: 'medium',
  type: 'date',
  clearable: 'true',
  format: 'M/D/YYYY',
  disabled: false,
  editable: false,
  disabledDate: () => false,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6660%3A147692',
  },
};

export const DateRange :Story = Template.bind({});
DateRange.args = {
  type: 'daterange',
  format: 'D MMMM YYYY',
  'range-separator': '-',
  'start-placeholder': 'Start date',
  'end-placeholder': 'End date',
  size: 'size',
  'unlink-panels': false,
};

const DateTimeTemplate = (args: any) => ({
  components: { DateTimePicker },
  setup() {
    const dateTimeValue = ref('');

    return {
      dateTimeValue,
      args,
    };
  },
  template: '<DateTimePicker :args="args" v-model="dateTimeValue" />',
});

export const InlineDateTime :Story = DateTimeTemplate.bind({});
InlineDateTime.args = {
  type: 'datetime',
  format: 'D MMMM YYYY hh:mm:ss',
  placeholder: 'Select date and time',
  size: 'size',
};
