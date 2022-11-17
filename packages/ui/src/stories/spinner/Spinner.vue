<template>
  <div :size="size" :type="type" :opacity="opacity"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DfSpinner',
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    opacity: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
div[type='primary'] {
  background: #7239ea;
}
div[type='info'] {
  background: #009ef6;
}
div[type='warning'] {
  background: #ffc700;
}
div[type='success'] {
  background: #50cd89;
}
div[type='danger'] {
  background: #f1416c;
}

div[size='small'] {
  width: 40px;
  height: 40px;
}
div[size='medium'] {
  width: 60px;
  height: 60px;
}

div[size='large'] {
  width: 80px;
  height: 80px;
}

div[opacity='transparent'] {
  animation: rotate 0.7s linear infinite;
  border-radius: 50%;
  position: relative;
}
div[opacity='transparent']::before,
div[opacity='transparent']::after {
  content: '';
  position: absolute;
}

div[opacity='transparent']::before {
  border-radius: 50%;
  background: linear-gradient(
        0deg,
        hsla(0, 0%, 100%, 1) 50%,
        hsla(0, 0%, 100%, 0.9) 100%
      )
      0% 0%,
    linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0.9) 0%,
        hsla(0, 0%, 100%, 0.6) 100%
      )
      100% 0%,
    linear-gradient(
        180deg,
        hsla(0, 0%, 100%, 0.6) 0%,
        hsla(0, 0%, 100%, 0.3) 100%
      )
      100% 100%,
    linear-gradient(
        360deg,
        hsla(0, 0%, 100%, 0.3) 0%,
        hsla(0, 0%, 100%, 0) 100%
      )
      0% 100%;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
}

div[opacity='transparent']::after {
  background: white;
  border-radius: 50%;
  transform: scale(0.8);
  top: 3%;
  bottom: 3%;
  left: 3%;
  right: 3%;
}

div[opacity='opaque'] {
  animation: rotate 0.7s linear infinite;
  border-radius: 50%;
  position: relative;
}
div[opacity='opaque']::before,
div[opacity='opaque']::after {
  content: '';
  position: absolute;
}

div[opacity='opaque']::before {
  border-radius: 50%;
  background: linear-gradient(
        0deg,
        rgb(255, 255, 255) 50%,
        hsl(0, 0%, 100%) 100%
      )
      0% 0%,
    linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0%,
        hsla(0, 0%, 100%, 0.014) 100%
      )
      100% 0%,
    linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        hsla(0, 0%, 100%, 0) 100%
      )
      100% 100%,
    linear-gradient(360deg, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0) 100%)
      0% 100%;
  background-repeat: no-repeat;
  background-size: 50% 50%;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
}

div[opacity='opaque']::after {
  background: white;
  border-radius: 50%;
  transform: scale(0.8);
  top: 3%;
  bottom: 3%;
  left: 3%;
  right: 3%;
}
</style>
