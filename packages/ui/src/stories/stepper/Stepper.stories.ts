// eslint-disable-next-line import/no-unresolved
import { ref } from 'vue';
import { Story } from '@storybook/vue3';
import { ElSteps, ElStep, ElButton } from 'element-plus';
import { Edit, Picture, Upload } from '@element-plus/icons-vue';
import * as Icons from '@element-plus/icons-vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Stepper',
  decorators: [withDesign],
  argTypes: {
    space: {
      description:
        'number - string | the spacing of each step, will be responsive if omitted. Supports percentage.',
      control: 'text',
    },
    direction: {
      description: 'string | display direction',
      control: { type: 'select', options: ['vertical', 'horizontal'] },
    },
    active: {
      description: 'number | current activation step',
      control: 'number',
    },
    'process-status': {
      description: 'string | status of current step',
      control: {
        type: 'select',
        options: ['wait', 'process', 'finish', 'error', 'success'],
      },
    },
    'finish-status': {
      description: 'string | status of end step',
      control: {
        type: 'select',
        options: ['wait', 'process', 'finish', 'error', 'success'],
      },
    },
    'align-center': {
      description: 'boolean | center title and description',
      control: 'boolean',
    },
    simple: {
      description: 'boolean | whether to apply simple theme',
      control: 'boolean',
    },
    title: {
      description: 'string | step title',
      control: 'text',
    },
    description: {
      description: 'string | step description',
      control: 'text',
    },
    icon: {
      description: 'string - Component | step custom icon. Icons can be passed via named slot as well',
      control: { type: 'select', options: Object.keys(Icons) },
    },
    status: {
      description: 'string | current status. It will be automatically set by Steps if not configured.',
      control: {
        type: 'select',
        options: ['wait', 'process', 'finish', 'error', 'success'],
      },
    },
  },
};

const active = ref(0);
const next = () => {
  if (active.value + 1 > 2) {
    active.value = 0;
  } else {
    active.value += 1;
  }
};
const Template = (args: any) => ({
  components: { ElSteps, ElStep, ElButton },
  setup() {
    return {
      args,
      next,
      active,
      ...Icons,
    };
  },
  template: `<el-steps v-bind="args" :active="active">
    <el-step title="Step 1" description="Some description" status="success"></el-step>
    <el-step title="Step 2" description="Some description" ></el-step>
    <el-step :title="args.title" :description="args.description" :status="args.status" :icon="${args.icon}"></el-step>
  </el-steps>
  <el-button style="margin-top: 20px" @click="next">Next step</el-button>`,
});

const TemplateWithIcon = (args: any) => ({
  components: { ElSteps, ElStep },
  setup() {
    return {
      args,
      Edit,
      Picture,
      Upload,
    };
  },
  template: `<el-steps v-bind="args">
    <el-step title="Step 1" :icon="Edit"></el-step>
    <el-step title="Step 2" :icon="Upload"></el-step>
    <el-step title="Step 3" :icon="Picture"></el-step>
  </el-steps>`,
});

export const Normal: Story = Template.bind({});
Normal.args = {
  'align-center': true,
  simple: false,
  direction: 'vertical',
  title: 'step 3',
  description: 'Delete',
  status: 'process',
  icon: 'Delete',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5613%3A217528',
  },
};

export const StepperWithIcon: Story = TemplateWithIcon.bind({});
StepperWithIcon.args = {
  active: 1,
  'process-status': 'success',
  simple: true,
};
StepperWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=5613%3A217528',
  },
};
