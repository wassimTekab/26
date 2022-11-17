<template>
<theme-provider :theme="theme">
  <el-tag :size="size" :effect="effect" :type="type" :closable="closable">
    <div class="tag-wrapper">
      <img v-if="srcLeft" :src="srcLeft" alt="" class="img-left" />
      <div>
        {{ text }}
      </div>
      <img v-if="srcRight" :src="srcRight" alt="" class="img-right" />
    </div>
  </el-tag>
  </theme-provider>
</template>

<script lang="ts">
import { ElTag } from 'element-plus';
import { defineComponent, ref } from 'vue';
import ThemeProvider from '../../themeProvider/ThemeProvider.vue';

export default defineComponent({
  name: 'DSBTag',
  components: {
    ElTag,
    ThemeProvider,
  },
  props: {
    size: {
      type: String,
      default: 'default',
    },
    effect: {
      type: String,
      default: 'light',
    },
    text: {
      type: String,
      default: 'Tag',
    },

    srcRight: {
      type: String,
      default: '',
    },

    srcLeft: {
      type: String,
      default: '',
    },
    closable: {
      type: Boolean,
    },

    type: {
      type: String,
      default: '',
    },
  },
  setup() {
    const theme = ref({
      primary: '#800000',
      success: '#67C23A',
      warning: '#E6A23C',
      danger: '#F56C6C',
      error: '#f56c6c',
      info: '#909399',

    });
    return { theme };
  },
});
</script>
<style lang="scss" scoped>
.img-right,
.img-left {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.img-left {
  margin-right: 0.5rem;
}
.img-right {
  margin-left: 0.5rem;
}
.tag-wrapper {
  display: flex;
  align-items: center;
}
</style>
