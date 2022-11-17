import { ElSkeleton, ElSkeletonItem } from 'element-plus';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Skeleton',
  component: { ElSkeleton, ElSkeletonItem },
  decorators: [withDesign],
  argTypes: {
    variant: { control: { type: 'select', options: ['p', 'text', 'h1', 'h3', 'caption', 'button', 'image', 'circle', 'rect'] }, description: 'The current rendering skeleton type' },
    animated: { control: { type: 'boolean' }, description: 'whether showing the animation' },
    loading: { control: { type: 'boolean' }, description: 'whether showing the real DOM' },
    count: { control: { type: 'number' }, description: 'how many fake items to render to the DOM' },
    rows: { control: { type: 'number' }, description: 'numbers of the row, only useful when no template slot were given' },
    addVariant: { control: { type: 'select', options: ['p', 'text', 'h1', 'h3', 'caption', 'button', 'image', 'circle', 'rect'] }, description: 'add skeleton' },
  },
};
const Template = (args: any) => ({
  components: { ElSkeleton, ElSkeletonItem },
  setup() {
    return { args };
  },
  template: `
  <el-skeleton v-bind="args">
    <template #template>
      <el-skeleton-item v-if="args.variant!='text'" :variant="args.variant"
      :style="{'height': ['circle','image'].includes(args.variant) ? '100px': '',
      'width': ['circle','image'].includes(args.variant) ? '100px': ''}"/>
    </template>
  </el-skeleton>
  <br/>
  <el-skeleton v-bind="args" v-if="args.addVariant" >
  <template #template>
  <el-skeleton-item v-if="args.addVariant!='text'" :variant="args.addVariant" :style="{'height': ['circle','image'].includes(args.addVariant) ? '100px': '',
  'width': ['circle','image'].includes(args.addVariant) ? '100px': ''}"/>
  </template>
  </el-skeleton>
  `,
});
export const SkeletonAnatomy: Story = Template.bind({});
SkeletonAnatomy.args = {
  variant: 'circle',
  addVariant: 'text',
  animated: true,
  loading: true,
  rows: 5,
  count: 1,
};

export const SkeletonShape: Story = Template.bind({});
SkeletonShape.args = {
  variant: 'circle',
  count: 1,
  animated: true,
  loading: true,
};

export const SkeletonText: Story = Template.bind({});
SkeletonText.args = {
  variant: 'text',
  count: 1,
  rows: 5,
  animated: true,
  loading: true,
};
