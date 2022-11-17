<template>
<div v-if="content">
  <el-tooltip
  :content="content"
  :effect="effect"
  :placement="placement">
  <el-button
  type="text"
  @click="copy" >{{texto}}</el-button>
  </el-tooltip>
</div>
<div v-else>
    <el-button type="text" @click="copy" >{{texto}}</el-button>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElButton, ElTooltip } from 'element-plus';

export default defineComponent({
  name: 'DfClipboard',
  components: { ElButton, ElTooltip },
  props: {
    text: {
      type: String,
    },
    Clipboard: {
      type: String,
    },
    CopyType: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    effect: {
      type: String,
    },
    placement: {
      type: String,
    },
    feedback: {
      type: String,
    },
  },
  setup(props) {
    const texto = ref(props.Clipboard);
    const copy = async () => {
      if (props.feedback && props.feedback.length > 0) {
        navigator.clipboard.writeText(props.text);
        texto.value = props.feedback;
      } else { navigator.clipboard.writeText(props.text); }
    };

    return { copy, texto };
  },
});
</script>
