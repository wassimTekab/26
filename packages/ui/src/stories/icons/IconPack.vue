<template>
  <div v-for="item in Icons" :key="item.toString()" class="icons">
    <div class="icon">
      <el-icon :color="color" :size="size">
        <component :is="item.name" />
      </el-icon>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as Icons from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';

export default defineComponent({
  name: 'IconPack',
  components: {
    ElIcon,
    ...Icons,
  },
  props: {
    size: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      Icons,
    };
  },
});
</script>
<style scoped>
.icons {
  display: inline;
}
.icon {
  display: inline-block;
  text-align: center;
  padding: 10px;
  margin: 10px;
}
</style>
