<template>
  <el-dropdown :trigger="trigger" :size="size" :show-timeout="timeout">
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item :disabled="disabled">Action 4</el-dropdown-item>
        <el-dropdown-item :divided="divided">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  ElDropdown,
  ElIcon,
  ElDropdownMenu,
  ElDropdownItem,
} from 'element-plus';
import { ArrowDown } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'DropDown',
  components: {
    ElDropdown,
    ElIcon,
    ArrowDown,
    ElDropdownMenu,
    ElDropdownItem,
  },
  props: {
    trigger: {
      type: String,
    },
    size: {
      type: String,
    },
    divided: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    timeout: {
      type: Number,
    },
  },
});
</script>
