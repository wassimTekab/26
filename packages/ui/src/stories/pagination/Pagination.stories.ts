import { ElPagination } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Pagination',
  decorators: [withDesign],
  argTypes: {
    small: {
      description: 'boolean| whether to use small pagination',
      control: 'boolean',
    },
    background: {
      description: 'boolean| whether the buttons have a background color',
      control: 'boolean',
    },
    'page-size': {
      description:
        'number| item count of each page, supports the v-model bidirectional binding',
      control: 'number',
    },
    'default-page-size': {
      description: 'number| default initial value of page size',
      control: 'number',
    },
    total: {
      description: 'number| total item count',
      control: 'number',
    },
    'page-count': {
      description:
        'number| total page count. Set either total or page-count and pages will be displayed',
      control: 'number',
    },
    'pager-count': {
      description:
        'number| number of pagers. Pagination collapses when the total page count exceeds this value. accept odd number between 5 and 21',
      control: {
        type: 'number',
        min: 5,
        max: 21,
        step: 2,
      },
    },
    'current-page': {
      description:
        'number| current page number, supports the v-model bidirectional binding',
      control: 'number',
    },
    'default-current-page': {
      description: 'number| default initial value of current-page',
      control: 'number',
    },
    layout: {
      description:
        'string| layout of Pagination, elements separated with a comma ( prev / pager / next / jumper / -> / total / slots)',
      control: 'text',
    },
    'prev-text': {
      description: 'string| text for the prev button',
      control: 'text',
    },
    'next-text': {
      description: 'string| text for the next button',
      control: 'text',
    },
    disabled: {
      description: 'boolean| whether Pagination is disabled',
      control: 'boolean',
    },
    'hide-on-single-page': {
      description: 'boolean| whether to hide when there is only one page',
      control: 'boolean',
    },
    '@size-change': {
      description: 'Event(the new page size)| triggers when page-size changes',
    },
    '@current-change': {
      description:
        'Event(the new current page)| triggers when current-page changes',
    },
    '@prev-click': {
      description:
        'Event(the new current page)| triggers when the prev button is clicked and current page changes',
    },
    '@next-click': {
      description:
        'Event(the new current page)| triggers when the next button is clicked and current page changes',
    },
  },
};

const Template = (args: any) => ({
  components: { ElPagination },
  setup() {
    return { args };
  },
  template: `
  <el-pagination v-bind="args"></el-pagination>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  background: true,
  'page-size': 20,
  total: 180,
  'prev-text': 'Prev',
  'next-text': 'Next',
  layout: 'prev, pager, next, jumper, ->, total',
  'pager-count': 6,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=6755%3A156852',
  },
};
