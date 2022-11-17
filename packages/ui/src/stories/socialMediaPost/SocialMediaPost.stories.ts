import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import SocialMediaPost from './SocialMediaPost.vue';

export default {
  title: 'SocialMediaPost',
  argTypes: {
    SocialMediaPostData: {
      description: 'the parent object that be passed as props to the component and contain all data ',
    },
    posterAvatarImg: {
      control: { type: 'text' },
      description: 'avatar img',
    },
    posterName: {
      control: { type: 'text' },
      description: 'poster name',
    },
    postedSince: {
      control: { type: 'date' },
      description: 'poster name',
    },
    postDescription: {
      control: { type: 'text' },
      description: 'poste description text',
    },
    postMedia: {
      control: { type: 'object' },
      description: 'the media object displayed in the component it contain two properties src (take the file path) and type  (can be image or video) ',
    },

    postLikes: {
      control: { type: 'number' },
      description: 'number of likes',
    },
    postComments: {
      control: { type: 'number' },
      description: 'number of Comments',
    },
    postShares: {
      control: { type: 'number' },
      description: 'number of Shares',
    },
    handleSave: {
      description: 'actions that triggered when clicking on the save icon',
    },
    handleLike: {
      description: 'actions that triggered when clicking on the Like icon',
    },
    handleComment: {
      description: 'actions that triggered when clicking on the Comment icon',
    },
    handleShare: {
      description: 'actions that triggered when clicking on the Share icon',
    },
    handleSend: {
      description: 'actions that triggered when clicking on the Send icon',
    },
    theme: {
      description: 'the object that be passed to component to specify background-color and text-color',
    },
  },

  props: {
    theme: {
      type: Object,
    },
  },
};

const Template = (args:any) => ({
  components: { SocialMediaPost },
  setup() {
    const SocialMediaPostData = ref({
      posterAvatarImg: args.posterAvatarImg,
      posterName: args.posterName,
      // ex :calculate time since the time of post that created at
      postedSince: Date.now() - args.postedSince,
      postDescription: args.postDescription,
      postMedia: {
        src: args.postMedia.src,
        type: args.postMedia.type,
      },
      postLikes: args.postLikes,
      postComments: args.postComments,
      postShares: args.postShares,
      handleSave: () => console.log('i save'),
      handleLike: () => console.log('i like'),
      handleComment: () => console.log('i comment'),
      handleShare: () => console.log('i share'),
      handleSend: () => console.log('i send'),
    });
    return { SocialMediaPostData };
  },

  template: '<SocialMediaPost :socialMediaData="SocialMediaPostData" :theme="theme" />',
});

export const Basic: Story = Template.bind({});
Basic.args = {
  posterAvatarImg: 'assets/avatartest.png',
  posterName: 'Google',
  postLikes: 300,
  postComments: 100,
  postShares: 70,
  postedSince: Date.now(),
  postDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Placeat et quos velit non ullam ratione repellat molestias praesentium excepturi ,architecto voluptate alias accusantium molestiae, Reprehenderit!',
  postMedia: {
    src: 'assets/AbstractRotatingCubesVidevo.mov',
    type: 'video',
  },
};
