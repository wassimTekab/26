import { Story } from '@storybook/vue3';
import {
  ElUpload, ElButton, ElDialog, ElIcon,
} from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import { ref } from 'vue';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Upload',
  component: ElUpload,
  decorators: [withDesign],
  argTypes: {
    limit: { control: 'number', description: 'maximum number of uploads allowed' },
    multiple: { control: 'boolean', description: 'whether uploading multiple files is permitted' },
  },
};
const IconUploadTemplate = (args: any) => ({
  components: {
    ElUpload, ElButton, ElDialog, ElIcon, Plus,
  },
  setup() {
    const dialogImageUrl = ref('');
    const dialogVisible = ref(false);
    const handlePictureCardPreview = (file: UploadFile) => {
      console.log(file);
      dialogImageUrl.value = file.url!;
      dialogVisible.value = true;
    };
    return {
      args, dialogVisible, handlePictureCardPreview, dialogImageUrl,
    };
  },
  template: `  <el-upload  list-type="picture-card" :auto-upload="false" :limit="args.limit" :multiple="args.multiple"  :on-preview="handlePictureCardPreview">
    <el-icon><Plus /></el-icon>

</el-upload>
<el-dialog v-model="dialogVisible">
  <img style="width: 100%" :src="dialogImageUrl" alt="" />
</el-dialog>`,
});

export const Normal: Story = IconUploadTemplate.bind({});
Normal.args = {
  limit: 1,
  multiple: false,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9437%3A164185',
  },
};
const ButtonUploadTemplate = (args: any) => ({
  components: { ElUpload, ElButton },
  setup() {
    return { args };
  },
  template: `<el-upload
  ref="upload"
  :limit="args.limit"
  :multiple="args.multiple"
  :on-exceed="handleExceed"
  :auto-upload="false">
    <el-button type="primary">select file</el-button>
</el-upload>`,
});
export const ButtonUpload: Story = ButtonUploadTemplate.bind({});
ButtonUpload.args = {
  ...Normal.args,
};
ButtonUpload.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=9439%3A160064',
  },
};
