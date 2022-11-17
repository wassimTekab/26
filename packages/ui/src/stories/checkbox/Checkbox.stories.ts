import { ElCheckbox, ElCheckboxGroup, ElCheckboxButton } from 'element-plus';
import { Story } from '@storybook/vue3';
import { ref } from 'vue';

export default {
  title: 'Checkbox',
  component: ElCheckbox,
  argTypes: {
    size: { control: { type: 'select', options: ['large', 'default', 'small'] }, description: 'size of the checkbox' },
    label: { control: 'text', description: 'value of the Checkbox when used inside a checkbox group' },
    disabled: { control: 'boolean', description: 'whether the checkbox is disbled' },
    border: { control: 'boolean', description: 'whether to add a border around Checkbox' },
    checked: { control: 'boolean', description: 'if the Checkbox is checked' },
    min: { control: 'number', description: 'minimum number of checkbox checked' },
    max: { control: 'number', description: 'maximum number of checkbox checked' },
    '@change': { description: 'triggers whenthe binding value changes' },
  },
};
// basic
const Template = (args: any) => ({
  components: { ElCheckbox },
  setup() {
    const checked = ref(false);

    return { args, checked };
  },
  template: `<el-checkbox v-model="checked" v-bind="args"/>
          <el-checkbox v-model="checked" v-bind="args" disabled/>`,
});

export const Normal: Story = Template.bind({});

Normal.args = {
  label: 'option 1',
  size: 'large',
  disabled: false,
  border: true,
  checked: false,
};
// checkbox group
const buttonGroupTemplate = (args: any) => ({
  components: { ElCheckbox, ElCheckboxGroup },
  setup() {
    const checkAll = ref(false);
    const isIndeterminate = ref(true);
    const checkedCities = ref(['Shanghai', 'Beijing']);
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

    const handleCheckAllChange = (val: boolean) => {
      checkedCities.value = val ? cities : [];
      isIndeterminate.value = false;
    };
    const handleCheckedCitiesChange = (value: string[]) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === cities.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
    };

    return {
      args,
      checkAll,
      isIndeterminate,
      checkedCities,
      cities,
      handleCheckAllChange,
      handleCheckedCitiesChange,
    };
  },
  template: `<el-checkbox
  v-model="checkAll"
  
  :indeterminate="isIndeterminate"
  @change="handleCheckAllChange"
  >Check all</el-checkbox
>
<el-checkbox-group
v-bind="args"
  v-model="checkedCities"
  @change="handleCheckedCitiesChange"
>
  <el-checkbox v-for="city in cities" :key="city" :label="city" :border="args.border">{{
    city
  }}</el-checkbox>
</el-checkbox-group>`,
});
export const BtnGroup: Story = buttonGroupTemplate.bind({});

BtnGroup.args = {
  ...Normal.args,
  min: 1,
  max: 2,
};

// checkbox button
const buttonCheckbox = (args: any) => ({
  components: { ElCheckbox, ElCheckboxGroup, ElCheckboxButton },
  setup() {
    const checkboxGroup1 = ref(['Shanghai']);
    const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

    return { args, checkboxGroup1, cities };
  },
  template: `<el-checkbox-group v-model="checkboxGroup1" :size="args.size">
  <el-checkbox-button v-for="city in cities" :key="city" v-bind="args" :label="city">
    {{ city }}
  </el-checkbox-button>
</el-checkbox-group>`,
});

export const btnCheckbox: Story = buttonCheckbox.bind({});

btnCheckbox.args = {
  ...Normal.args,
};
