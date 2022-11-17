import { ElPopover, ElButton } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Popover',
  decorators: [withDesign],
  argTypes: {
    trigger: {
      description: 'string | how the popover is triggered ',
      control: {
        type: 'select',
        options: ['click', 'focus', 'hover', 'contextmenu'],
      },
    },
    title: {
      description: 'string | popover title',
      control: {
        type: 'text',
      },
    },
    effect: {
      description: 'string | Tooltip theme',
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
    content: {
      description:
        'string | popover content, can be replaced with a default slot',
      control: 'text',
    },
    width: {
      description: 'string - number | popover width',
      control: 'text',
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
    visible: {
      description: 'boolean | whether popover is visible',
      control: 'boolean',
    },
    offset: {
      description: 'number | popover offset',
      control: 'number',
    },
    'show-arrow': {
      description: 'boolean | whether a tooltip arrow is displayed or not',
      control: 'boolean',
    },
    'popper-class': {
      description: 'string | custom class name for popover',
    },
    'show-after': {
      description: 'number | delay of appearance, in millisecond',
      control: 'number',
    },
    'hide-after': {
      description: 'number | delay of disappear, in millisecond',
      control: 'number',
    },
    '@show': {
      description: 'Event | triggers when popover shows',
    },
    '@before-enter': {
      description: 'Event | triggers when the entering transition befores',
    },
    '@after-enter': {
      description: 'Event | triggers when the entering transition ends',
    },
    '@hide': {
      description: 'Event | triggers when popover hides',
    },
    '@before-leave': {
      description: 'Event | triggers when the leaving transition befores',
    },
    '@after-leave': {
      description: 'Event | triggers when the leaving transition ends',
    },
  },
};

const Template = (args: any) => ({
  components: { ElPopover, ElButton },
  setup() {
    return { args };
  },
  template: `
  <el-popover v-bind="args">
    <template #reference>
      <el-button style="display: block; margin: 200px auto;">Hover to activate</el-button>
    </template>
  </el-popover>`,
});

const RichContentTemplate = (args: any) => ({
  components: { ElPopover, ElButton },
  setup() {
    return { args };
  },
  template: `
  <el-popover v-bind="args" >
    <template #reference>
      <el-button style="display: block; margin: 200px auto;">Click to activate</el-button>
    </template>
    <template #default>
      <div  class="demo-rich-conent"  style="display: flex; gap: 16px; flex-direction: column" >
        <img src="https://www.imedias.pro/wp-content/themes/bootstrap-basic4-child/images/cours/images_web/tux_png_24.png">
        <div>
            <p class="demo-rich-content__name" style="margin: 0; font-weight: 500">
              Linux
            </p>
            <p  class="demo-rich-content__mention"  style="margin: 0; font-size: 14px; color: var(--el-color-info)">
              @mention
            </p>
        </div>
        <p class="demo-rich-content__desc" style="margin: 0">
            this is content
        </p>
      </div>
    </template>
  </el-popover>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  placement: 'top-start',
  title: 'Title',
  width: 180,
  trigger: 'hover',
  content: 'this is content, ...',
  'hide-after': 2000,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5629%3A206947',
  },
};

export const RichContent: Story = RichContentTemplate.bind({});
RichContent.args = {
  placement: 'left',
  width: 200,
  trigger: 'click',
  'show-after': 1000,
};
RichContent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5629%3A206947',
  },
};
