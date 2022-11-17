import { ElDialog, ElButton } from 'element-plus';
import { Story } from '@storybook/vue3';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Dialog',
  component: ElDialog,
  decorators: [withDesign],
  argTypes: {
    title: { description: 'title of Dialog. Can also be passed with a named slot' },
    width: { description: 'width of Dialog ', default: '30%' },
    fullscreen: { description: 'whether the Dialog takes up full screen' },
    draggable: { description: 'enable dragging feature for Dialog' },
    center: { description: 'whether to align the header and footer in center' },

  },
};

const Template = (args: any) => ({
  components: { ElDialog, ElButton },
  setup() {
    const dialogVisible = ref(false);
    return { args, dialogVisible };
  },
  template: `  
  <el-button type="text" @click="dialogVisible = true"
  >click to open the Dialog</el-button
>

<el-dialog
  v-model="dialogVisible"
  :draggable="args.draggable"
  :fullscreen="args.fullscreen"
  :center="args.center"
  :title="args.title"
  :width="args.width"
>
<span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
</el-dialog>`,

});

export const Basic: Story = Template.bind({});
Basic.args = {
  title: 'dialog',
  draggable: false,
  center: false,
  fullscreen: false,
  width: '30%',
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9784%3A152829',
  },
};
