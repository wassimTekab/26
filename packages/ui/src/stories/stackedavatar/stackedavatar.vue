<template>
  <div class="content">
    <div>
      <el-avatar
        v-for="user in computedUsers"
        :key="user.id"
        style="margin-left: -0.5em; border: solid"
        :size="size"
        :loading="loading"
      >
        <el-popover
          :disabled="disabled"
          :placement="placement"
          :effect="effect"
          :trigger="trigger"
          :width="width"
        >
          <template #default>
            <div>
              {{ user.name }}
            </div>
            <div>
              {{ user.email }}
            </div>
          </template>
          <template #reference>
            <img
              :src="
                !loading
                  ? user.avatarUrl
                  : 'https://phoneky.co.uk/thumbs/screensavers/down/misc/loading_noehu7zw.gif'
              "
            />
          </template>
        </el-popover>
      </el-avatar>
    </div>
    <el-avatar
      v-if="users.length - userCount > 0 && !loading && userCount > 0"
      style="margin-left: -0.5em; border: solid"
      :user-count="userCount"
      :size="size"
    >
      +{{ users.length - userCount }}
    </el-avatar>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity';
import { ElAvatar, ElPopover } from 'element-plus';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StackedAvatar',
  components: {
    ElAvatar,
    ElPopover,
  },
  props: {
    users: {
      type: Object,
    },
    size: {
      type: Number,
    },
    userCount: {
      type: Number,
    },
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    placement: {
      type: Object,
    },
    trigger: {
      type: Object,
    },
    effect: {
      type: Object,
    },
    width: {
      type: Number,
    },

  },
  setup(props) {
    const computedUsers = computed(() => props.users.slice(0, props.userCount));
    return {
      computedUsers,
    };
  },
});
</script>
<style scoped>
.content {
  display: flex;
}
</style>
