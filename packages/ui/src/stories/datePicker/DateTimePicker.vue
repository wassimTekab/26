<template>

<div class="date-time-container">
    <el-date-picker
    :size="args.size"
    popper-class="inline-mode-date-picker"
    :type="args.type"
    :placeholder="args.placeholder"
    :format="args.format"
    :clearable="args.clearable"
    @change="updateValue"
      />
</div>

</template>

<script lang="ts" setup>

import { ElDatePicker } from 'element-plus';
import { onMounted } from 'vue';

const props = defineProps({
  args: Object,
 

});
const emit = defineEmits(['update:modelValue']);

const updateValue = (value :any) => {
  emit('update:modelValue', value);
};

onMounted(() => {
  const inputDate = document.getElementsByClassName('el-input el-input--prefix el-input--suffix el-date-editor el-date-editor--datetime el-tooltip__trigger el-tooltip__trigger')?.[0].children[0] as HTMLElement;
  inputDate.setAttribute('readonly', 'true');
  inputDate.setAttribute('class', 'custom-input el-input__inner');
});

</script>
<style lang="scss" >

  .custom-input.el-input__inner{
    border-radius: 10px;
  }
.inline-mode-date-picker.el-popper.is-pure.is-light.el-picker__popper {
    display: block!important;
    transition-duration: unset !important;
     border-radius: 20px;
     box-shadow: none;
}
.el-picker-panel.el-date-picker.has-time{
   border-radius: 20px;
}
.el-picker-panel__footer{
  border-radius: 0 0 20px 20px;
}

</style>
