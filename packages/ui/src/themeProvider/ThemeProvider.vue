<template>
  <div :style="style.objectStyle"  >
    <slot> </slot>

  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

type ITheme = {
  primary?: string,
  success?: string,
  warning?: string,
  info?: string,
  error?: string,
  danger?: string,
  background?: String,
  color?: String

}
export default defineComponent({
  props: {
    theme: {
      type: Object as () => ITheme,
      default() { return {}; },
    },
  },
  setup(props) {
    /* Function to Mix Color  */
    const mixColor = (hexColorStart: any, hexColorEnd: string, percent: number) => {
      const toRgb = (x: string) => {
        const i = parseInt(x.toString().replace('#', ''), 16);
        return {
          // eslint-disable-next-line no-bitwise
          r: (i >> 16) & 255,
          // eslint-disable-next-line no-bitwise
          g: (i >> 8) & 255,
          // eslint-disable-next-line no-bitwise
          b: i & 255,
        };
      };
      const rgbStart = toRgb(hexColorStart);
      const rgbEnd = toRgb(hexColorEnd);
      const deltaRgb = {
        r: ((rgbEnd.r - rgbStart.r) / 100) * percent,
        g: ((rgbEnd.g - rgbStart.g) / 100) * percent,
        b: ((rgbEnd.b - rgbStart.b) / 100) * percent,
      };
      const resultRgb = {
        r: Math.round(rgbStart.r + deltaRgb.r),
        g: Math.round(rgbStart.g + deltaRgb.g),
        b: Math.round(rgbStart.b + deltaRgb.b),
      };
      return `#${resultRgb.r < 16 ? '0' : ''}${resultRgb.r.toString(16)}${
        resultRgb.g < 16 ? '0' : ''
      }${resultRgb.g.toString(16)}${
        resultRgb.b < 16 ? '0' : ''
      }${resultRgb.b.toString(16)}`;
    };
    const style = computed(() => {
      const objectStyle:any = {};
      const types = ['primary', 'success', 'warning', 'info', 'error', 'danger'];
      // eslint-disable-next-line no-restricted-syntax
      for (const type of types) {
        if (props.theme[type]) {
          objectStyle[`--el-color-${type}`] = props.theme[type];
          for (let i = 1; i < 10; i++) {
            objectStyle[`--el-color-${type}-light-${i}`] = mixColor(props.theme[type], '#ffffff', i * 10);
            if (type === 'primary') {
              objectStyle[`--el-color-${type}-dark-${i}`] = mixColor(props.theme[type], '#000000', i * 10);
            }
          }
        }
      }
      return {
        objectStyle,
      };
    });
    return { style };
  },
});
</script>
<style>
*, *::before, *::after {
  box-sizing: border-box;
}
</style>
