<template>
  <!-- Button -->
  <p>Button</p>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
  <!-- Radio -->
  <p class="mb-0">Radio</p>
  <div>
    <el-radio v-model="radio1" label="1">Option 1</el-radio>
    <el-radio v-model="radio1" label="2">Option 2</el-radio>
  </div>
  <div class="mb-4">
    <el-radio-group v-model="radio2">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
  </div>
  <div>
    <el-radio v-model="radio3" label="1" border>Option A</el-radio>
    <el-radio v-model="radio3" label="2" border>Option B</el-radio>
  </div>
  <!-- Checkbox -->
  <p class="mb-0">Checkbox</p>
  <div class="mb-4">
    <el-checkbox v-model="checked1" label="Option 1" />
    <el-checkbox v-model="checked2" label="Option 2" />
  </div>
  <div class="mb-4">
    <el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox-button v-for="city in cities" :key="city" :label="city">
        {{ city }}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
  <div class="mb-4">
    <el-checkbox v-model="checked3" label="Option1" border />
  </div>
  <!-- Input -->
  <p>Input</p>
  <el-input v-model="input" placeholder="Please input" class='w-350' />
  <!-- Select -->
  <p>Select</p>
  <div>
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
  <!-- Switch -->
  <p>Switch</p>
  <el-switch v-model="value1" />
  <!-- Slider -->
  <p>Slider</p>
  <el-slider v-model="value2" class='w-350' />
  <!-- DatePicker -->
  <p>DatePicker</p>
   <el-date-picker v-model="value3" type="date" placeholder="Pick a day" />
  <!-- Rate -->
  <p>Rate</p>
      <el-rate v-model="value4" />
  <!-- Rate -->
  <p>Table</p>
       <el-table :data="tableData" style="width: 40%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <!-- Tag -->
  <p>Tag</p>
    <el-tag>Tag 1</el-tag>
  <el-tag class="me-4" type="success">Tag 2</el-tag>
  <el-tag class="me-4" type="info">Tag 3</el-tag>
  <el-tag class="me-4" type="warning">Tag 4</el-tag>
  <el-tag class="me-4" type="danger">Tag 5</el-tag>
  <!-- Progress -->
  <p>Progress</p>
      <div class="demo-progress">
    <el-progress :percentage="50" />
    <el-progress :percentage="100" :format="format" />
    <el-progress :percentage="100" status="success" />
    <el-progress :percentage="100" status="warning" />
    <el-progress :percentage="50" status="exception" />
  </div>
  <!-- Tree -->
  <p>Tree</p>
   <el-tree :data="data"  />
  <!-- Pagination -->
  <p>Pagination</p>
     <el-pagination background layout="prev, pager, next" :total="1000" />
  <!-- Badge -->
  <p>Badge</p>
     <el-badge :value="3" class="me-4">
    <el-button>replies</el-button>
  </el-badge>
   <el-badge :value="1" class="me-4" type="primary">
    <el-button>comments</el-button>
  </el-badge>
   <el-badge :value="2" class="me-4" type="warning">
    <el-button>replies</el-button>
  </el-badge>
    <!-- Alert -->
  <p>Alert</p>
  <div class='w-350'>
    <el-alert title="success alert" type="success" class="mb-4" />
  <el-alert title="info alert" type="info" class="mb-4"/>
  <el-alert title="warning alert" type="warning" class="mb-4"/>
  <el-alert title="error alert" type="error" />
  </div>

    <!-- Message -->
  <p>Message</p>
 <el-button plain @click="open2"> Success </el-button>
  <el-button plain @click="open3"> Warning </el-button>
  <el-button plain @click="open1"> message </el-button>
  <el-button plain @click="open4"> Error </el-button>
    <!-- Notification -->
  <p>Notification</p>
 <el-button plain @click="open5"> Success </el-button>
  <el-button plain @click="open6"> Warning </el-button>
  <el-button plain @click="open7"> Info </el-button>
  <el-button plain @click="open8"> Error </el-button>
    <!-- Tabs -->
  <p>Tabs</p>
   <el-tabs v-model="activeName">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import {
  ElButton,
  ElRow,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElCheckbox,
  ElInput,
  ElSelect,
  ElOption,
  ElSwitch,
  ElSlider,
  ElDatePicker,
  ElRate,
  ElTable,
  ElTableColumn,
  ElTag,
  ElProgress,
  ElTree,
  ElPagination,
  ElBadge,
  ElAlert,
  ElMessage,
  ElNotification,
  ElTabs,
  ElTabPane,
} from 'element-plus';
import { ref } from 'vue';

const input = ref('');
const value = ref('');
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const radio1 = ref('1');
const radio2 = ref('2');
const radio3 = ref('3');
const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checkboxGroup1 = ref(['Shanghai']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];
const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`);
const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
];
const open1 = () => {
  ElMessage('this is a message.');
};
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  });
};
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  });
};
const open4 = () => {
  ElMessage.error('Oops, this is a error message.');
};
const open5 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const open6 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  });
};

const open7 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  });
};

const open8 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  });
};
const activeName = ref('first');

</script>
<style lang="scss" scoped>
.mb-4 {
  margin-bottom: 1rem;
}
.mb-0 {
  margin-bottom: 0;
}
.me-4{
  margin-right: 1rem;
}
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.w-350{
  width: 350px;
}
</style>
