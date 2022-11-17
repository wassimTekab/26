<template>
  <el-card  class="socialMediCard" :style="themeColor">
    <div class="card-header" :style="themeColor">
      <div class="card-header-info">
        <el-avatar shape="square" :src="socialMediaData.posterAvatarImg" />
        <div class="card-header-info-section">
          <h3>{{ socialMediaData.posterName }}</h3>
          <span>{{ socialMediaData.postedSince }} min </span>
        </div>
      </div>
      <el-icon @click="socialMediaData.handleSave">
        <CollectionTag />
      </el-icon>
    </div>
    <div class="card-content">
      <p :class="{ overflow: isExpand }">
        {{ socialMediaData.postDescription }}
      </p>
      <div class="see-more" @click="isExpandToggle">
        <span>{{ isExpand ? 'See more' : 'reduce' }} </span>
        <el-icon><Right /></el-icon>
      </div>
      <img
        v-if="socialMediaData.postMedia.type === 'image'"
        :src="socialMediaData.postMedia.src"
        alt="post-photo"
      />
      <video v-if="socialMediaData.postMedia.type === 'video'" controls>
        <source :src="socialMediaData.postMedia.src" />
      </video>

      <div class="card-content-stats">
        <p>{{ socialMediaData.postLikes }} Likes</p>
        <p>{{ socialMediaData.postComments }} Comments</p>
        <p>{{ socialMediaData.postShares }} Shares</p>
      </div>
    </div>
    <div class="card-footer" :style="themeColor">
      <div class="card-footer-item" @click="socialMediaData.handleLike">
        <el-icon :size="20">
          <svg
            width="22"
            height="25"
            viewBox="-5 -5 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6193 0.448242C13.8068 0.448242 12.0672 1.22449 10.9318 2.45116C9.79639 1.22449
8.0568 0.448242 6.2443 0.448242C3.03597 0.448242 0.515137 2.76741 0.515137 5.71908C0.515137
9.34158 4.0568 12.2932 9.42139 16.7782L10.9318 18.0337L12.4422 16.7687C17.8068 12.2932 21.3485
9.34158 21.3485 5.71908C21.3485 2.76741 18.8276 0.448242 15.6193 0.448242ZM11.036 15.3503L10.9318
15.4462L10.8276 15.3503C5.8693 11.2199 2.59847 8.48866 2.59847 5.71908C2.59847 3.80241 4.16097
2.36491 6.2443 2.36491C7.84847 2.36491 9.41097 3.31366 9.96305 4.62658H11.911C12.4526 3.31366
14.0151 2.36491 15.6193 2.36491C17.7026 2.36491 19.2651 3.80241 19.2651 5.71908C19.2651 8.48866
15.9943 11.2199 11.036 15.3503Z"
              :fill="theme.color"
            />
          </svg>
        </el-icon>

        <span>Like</span>
      </div>
      <div class="card-footer-item" @click="socialMediaData.handleComment">
        <el-icon>
          <ChatSquare />
        </el-icon>
        <span>Comment</span>
      </div>
      <div class="card-footer-item" @click="socialMediaData.handleShare">
        <el-icon>
          <Share />
        </el-icon>
        <span>Share</span>
      </div>
      <div class="card-footer-item" @click="socialMediaData.handleSend">
        <el-icon>
          <Promotion />
        </el-icon>
        <span>Send</span>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { ElAvatar, ElCard, ElIcon } from 'element-plus';
import {
  Share,
  ChatSquare,
  CollectionTag,
  Promotion,
  Right,
} from '@element-plus/icons-vue';

export default defineComponent({
  name: 'SocialMediaPost',
  components: {
    ElCard,
    ElAvatar,
    ElIcon,
    Share,
    ChatSquare,
    CollectionTag,
    Promotion,
    Right,
  },
  props: {
    socialMediaData: {
      type: Object,
      required: true,
    },
    theme: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isExpand = ref(true);
    const isExpandToggle = () => {
      isExpand.value = !isExpand.value;
    };

    const themeColor = computed(() => ({
      'background-color': props.theme.background,
      color: props.theme.color,
    }));

    return {
      isExpand,
      isExpandToggle,
      themeColor,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './socialMediaPost.scss';
</style>
