<template>
<el-menu
  :default-active="activeIndex"
  :mode="mode"
  :text-color="textColor"
  :background-color='backgroundColor'
  :active-text-color="activeTextColor"
>
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-sub-menu :disabled="disabled" index="2">
    <template #title>Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-sub-menu index="2-4">
      <template #title>item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4">Orders</el-menu-item>
</el-menu>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { ref } from 'vue';

export default defineComponent({
  components: {
    ElMenu, ElMenuItem, ElSubMenu,
  },
  props: {
    mode: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    activeTextColor: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },

  },
  setup() {
    const activeIndex = ref('4');
    return {
      activeIndex,
    };
  },
});
</script>
