import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';
import { ElPopover } from 'element-plus';
import StackedAvatar from './stackedavatar.vue';

export default {
  title: 'stackedavatar',
  component: { StackedAvatar, ElPopover },
  decorators: [withDesign],

  argTypes: {
    users: {
      description:
      '{ id: string; name?: string; avatarUrl?: string; }[]',
    },
    loading: { control: 'boolean' },
    userCount: {
      control: {
        type: 'number',
      },
    },
    size: {
      description: 'number - string | set avatar size',
      control: { type: 'select', options: ['small', 'default', 'large'] },
    },
    trigger: {
      description: 'string | how the popover is triggered ',
      control: {
        type: 'select',
        options: ['click', 'focus', 'hover', 'contextmenu'],
      },
    },
    effect: {
      description: 'string | Tooltip theme',
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
    width: {
      description: 'string - number | popover width',
      control: {
        type: 'number',
      },
    },
    placement: {
      description: 'string | popover placement',
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
        ],
      },
    },
    disabled: {
      description: 'boolean | whether Popover is disabled',
      control: 'boolean',
    },

  },
};

const Template = (args: any) => ({
  components: { StackedAvatar },
  setup() {
    return {
      args,
    };
  },
  template: `
  <StackedAvatar v-bind="args" :users="args.users"/>

  `,

});
export const Normal: Story = Template.bind({});
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6706%3A148789',
  },
};
Normal.args = {
  size: 'default',
  userCount: '2',
  loading: false,
  users: [
    {
      id: '1',
      name: 'Tom Coleman',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
      email: 'user@mail.com',
    },
    {
      id: '2',
      name: 'Zoltan Olah',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/81672',
      email: 'user@mail.com',

    },
    {
      id: '3',
      name: 'Tim Hingston',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
      email: 'user@mail.com',

    },
  ],
  placement: 'bottom-start',
  trigger: 'hover',
};
