<template>
  <el-avatar :shape="shape" :size="size">
    {{ firstName[0] ? firstName[0].toUpperCase() : ''
    }}{{ lastName[0] ? lastName[0].toUpperCase() : '' }}
  </el-avatar>
</template>

<script lang="ts">
import { ElAvatar } from 'element-plus';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DfAvatar',
  components: {
    ElAvatar,
  },
  props: {
    shape: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
});
</script>
