import { Story } from '@storybook/vue3';
import { ElTimeline, ElTimelineItem, ElCard } from 'element-plus';
import { MoreFilled } from '@element-plus/icons-vue';
import * as Icons from '@element-plus/icons-vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Timeline',
  decorators: [withDesign],
  argTypes: {
    timestamp: {
      description: 'string | timestamp content',
      control: 'text',
    },
    'hide-timestamp': {
      description: 'boolean | whether to show timestamp',
      control: 'boolean',
    },
    center: {
      description: 'boolean | Whether vertically centered',
      control: 'boolean',
    },
    placement: {
      description: 'string | position of timestamp',
      control: { type: 'inline-radio', options: ['top', 'bottom'] },
    },
    type: {
      description: 'string | node type',
      control: {
        type: 'select',
        options: ['primary', 'success', 'info', 'warning', 'danger'],
      },
    },
    color: {
      description: 'string | background color of node',
      control: { type: 'select', options: ['hsl', 'hsv', 'hex', 'rgb'] },
    },
    size: {
      description: 'string | node size',
      control: { type: 'inline-radio', options: ['normal', 'large'] },
    },
    icon: {
      description: 'string - Component | icon component',
      control: { type: 'select', options: Object.keys(Icons) },
    },
    hollow: {
      description: 'boolean | icon is hollow',
      control: 'boolean',
    },
    timelineItem: {
      description: 'Array of object to define the Timeline items',
    },
  },
};

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
];

const activitiesCustomized = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
];

const Template = (args: any) => ({
  components: { ElTimeline, ElTimelineItem, ElCard },
  setup() {
    return {
      args,
      activities,
      ...Icons,
    };
  },
  template: `<el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      v-bind="activity"
      v-bind="args"
      :icon="${args.icon}"
    >
      {{ activity.content }}
  </el-timeline>`,
});

const CustomItemTemplate = (args: any) => ({
  components: { ElTimeline, ElTimelineItem },
  setup() {
    return {
      args,
    };
  },
  template: `<el-timeline>
    <el-timeline-item
      v-for="(activity, index) in args.timelineItem"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :hollow="activity.hollow"
      :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>`,
});

const CustomContentTemplate = (args: any) => ({
  components: { ElTimeline, ElTimelineItem, ElCard },
  setup() {
    return {
      args,
    };
  },
  template: `<el-timeline>
  <el-timeline-item timestamp="2018/4/12" placement="top" v-bind="args">
    <el-card>
      <h4>Update Github template</h4>
      <p>Tom committed 2018/4/12 20:46</p>
    </el-card>
  </el-timeline-item>
  <el-timeline-item timestamp="2018/4/3" placement="top">
    <el-card>
      <h4>Update Github template</h4>
      <p>Tom committed 2018/4/3 20:46</p>
    </el-card>
  </el-timeline-item>
  <el-timeline-item timestamp="2018/4/2" placement="top">
    <el-card>
      <h4>Update Github template</h4>
      <p>Tom committed 2018/4/2 20:46</p>
    </el-card>
  </el-timeline-item>
</el-timeline>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  placement: 'bottom',
  center: true,
  type: 'danger',
  size: 'normal',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=8152%3A157712',
  },
};

export const Customized: Story = CustomItemTemplate.bind({});
Customized.args = {
  timelineItem: activitiesCustomized,
};
Customized.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=8152%3A157172',
  },
};

export const CustomContent: Story = CustomContentTemplate.bind({});
CustomContent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=8152%3A157713',
  },
};
