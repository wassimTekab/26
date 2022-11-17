<template>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
  <el-radio-button :label="false">expand</el-radio-button>
  <el-radio-button :label="true">collapse</el-radio-button>
</el-radio-group><br/>
<el-col>
   <el-menu
   :text-color="textColor"
  :background-color='backgroundColor'
  :active-text-color="activeTextColor"
  :collapse="isCollapse"
  :default-active="activeIndex"
  class="el-menu-vertical-demo"
  @open="handleOpen"
  @close="handleClose"
>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><Location /></el-icon>
      <span>Navigator One</span>
    </template>
    <el-menu-item-group title="Group One">
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Two">
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-sub-menu index="1-4">
      <template #title>item four</template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index="2">
    <el-icon><icon-menu /></el-icon>
    <span>Navigator Two</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <el-icon><document /></el-icon>
    <span>Navigator Three</span>
  </el-menu-item>
  <el-menu-item index="4" :disabled="disabled">
    <el-icon><setting /></el-icon>
    <span>Navigator Four</span>
  </el-menu-item>
</el-menu></el-col>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import {
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElCol,
  ElRadioGroup,
  ElRadioButton,
} from 'element-plus';
import {
  Location, Document, Menu as IconMenu, Setting,
} from '@element-plus/icons-vue';
import { ref } from 'vue';

export default defineComponent({
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    ElIcon,
    ElCol,
    Location,
    Document,
    IconMenu,
    Setting,
    ElRadioGroup,
    ElRadioButton,
  },
  props: {
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
    const activeIndex = ref('2');
    const isCollapse = ref(true);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    return {
      isCollapse,
      handleOpen,
      handleClose,
      activeIndex,
    };
  },
});
</script>
