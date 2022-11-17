import { Story } from '@storybook/vue3';
import { ElAvatar } from 'element-plus';
import { Avatar, User, UserFilled } from '@element-plus/icons-vue';
import { withDesign } from 'storybook-addon-designs';
import AvatarComponent from './Avatar.vue';

export default {
  title: 'Avatar',
  decorators: [withDesign],
  argTypes: {
    icon: {
      description:
        'Component - string | set representation type to Icon, more info on Icon Component',
      control: {
        type: 'select',
        options: [Avatar.name, UserFilled.name, User.name],
      },
    },
    size: {
      description: 'number - string | set avatar size',
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
    shape: {
      description: 'string | set avatar shape',
      control: { type: 'select', options: ['circle', 'square'] },
    },
    src: {
      description: 'string | the address of the image for an image avatar',
      control: 'text',
    },
    srcSet: {
      description:
        'string | A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use',
      control: 'text',
    },
    alt: {
      description:
        'string | This attribute defines an alternative text description of the image',
      control: 'text',
    },
    fit: {
      description:
        'string | set how the image fit its container for an image avatar',
      control: {
        type: 'select',
        options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      },
    },
    '@error': {
      description:
        'Event(e: Event) | handler when img load error, return false to prevent default fallback behavior',
    },
  },
};

const Template = (args: any) => ({
  components: { AvatarComponent },
  setup() {
    return { args };
  },
  template: '<AvatarComponent v-bind="args"/>',
});

const errorHandler = () => true;
const WithImageTemplate = (args: any) => ({
  components: { ElAvatar },
  setup() {
    return {
      args,
      errorHandler,
    };
  },
  template: `<el-avatar v-bind="args" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </el-avatar>`,
});

const WithIconTemplate = (args: any) => ({
  components: { ElAvatar },
  setup() {
    return {
      args,
      Avatar,
      User,
      UserFilled,
    };
  },
  template: `<div><el-avatar v-bind="args" :icon="${args.icon}">
    </el-avatar></div>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  shape: 'circle',
  firstName: 'Avatar',
  lastName: 'M',
  size: 'default',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6706%3A148789',
  },
};

export const Image: Story = WithImageTemplate.bind({});
Image.args = {
  shape: 'circle',
  size: 'large',
  src: 'https://www.alloschool.com/assets/ist/122443-color-professions-avatars/croupier.png',
};
Image.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6706%3A148789',
  },
};

export const Icon: Story = WithIconTemplate.bind({});
Icon.args = {
  shape: 'circle',
  size: 'default',
  icon: 'UserFilled',
};
Icon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6706%3A148789',
  },
};
