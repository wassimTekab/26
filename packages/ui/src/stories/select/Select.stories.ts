import { Story } from '@storybook/vue3';
import { ElSelect, ElOption } from 'element-plus';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Select',
  component: ElSelect,
  decorators: [withDesign],
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
};

const Template = (args: any) => ({
  components: { ElSelect, ElOption },
  setup() {
    const value = ref('');
    const options = [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ];
    return { args, value, options };
  },
  template: ` <el-select v-model="value"  :placeholder="args.placeholder" :size="args.size" :filterable="args.filterable" :disabled="args.disabled" :multiple="args.multiple">
  <el-option
  v-for="item in options"
  :key="item.value"
  :label="item.label"
  :value="item.value"
  >
  </el-option>
</el-select>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  placeholder: 'Select',
  size: 'medium',
  filterable: false,
  multiple: true,
  disabled: false,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=4396%3A112482',
  },
};
