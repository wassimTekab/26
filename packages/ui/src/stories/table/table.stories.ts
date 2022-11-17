import { ElTable, ElTableColumn } from 'element-plus';
import { Story } from '@storybook/vue3';
import { withDesign } from 'storybook-addon-designs';
import TableWithColumnSearchBox from './TableWithColumnSearchBox.vue';

export default {
  title: 'Table',
  component: ElTable,
  decorators: [withDesign],
  argTypes: {
    label: { control: 'text', description: ' To define the column name' },
    'width-column': {
      control: 'number',
      description: ' To define the width of columns',
    },
    stripe: {
      control: 'boolean',
      description:
        ' Striped table makes it easier to distinguish different rows.',
    },
    border: {
      control: 'boolean',
      description:
        'By default, Table has no vertical border. If you need it, you can set attribute border to true',
    },
    height: {
      control: 'number',
      description:
        'By setting the attribute height of el-table, you can fix the table header without any other codes.',
      defaultValue: false,
    },
    fixed: {
      control: 'select',
      description:
        "Attribute fixed is used in el-table-column, it accepts a Boolean. If true, the column will be fixed at left. It also accepts two string literals: 'left' and 'right', both indicating that the column will be fixed at corresponding direction.",
      options: ['left', 'right'],
      defaultValue: false,
    },
    size: {
      control: 'select',
      description: 'size of Table.',
      options: ['large', 'default', 'small'],
      defaultValue: 'default',
    },
    'prop-column-1': {
      control: 'select',
      options: ['date', 'name', 'address'],
      defaultValue: 'date',
      description:
        'Use prop (corresponding to a key of the object in data array) in el-table-column to insert data to table columns',
    },
    'prop-column-2': {
      control: 'select',
      options: ['date', 'name', 'address'],
      defaultValue: 'name',
      description:
        'Use prop (corresponding to a key of the object in data array) in el-table-column to insert data to table columns',
    },
    'prop-column-3': {
      control: 'select',
      options: ['date', 'name', 'address'],
      defaultValue: 'address',
      description:
        'Use prop (corresponding to a key of the object in data array) in el-table-column to insert data to table columns',
    },
  },
};

const Template = (args: any) => ({
  components: { ElTable, ElTableColumn },
  setup() {
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
    return { args, tableData };
  },
  template: ` <el-table :data="tableData" :stripe="args.stripe" :border='args.border' :height='args.height' :size="args.size"  style="width: 100%">
  <el-table-column :prop="args['prop-column-1']" :label="args.label" :width="args['width-column']" :fixed="args.fixed"/>
  <el-table-column :prop="args['prop-column-2']" label="Name" width="180" />
  <el-table-column :prop="args['prop-column-3']" label="Address" />
</el-table>`,
});

export const Basic: Story = Template.bind({});
Basic.args = {
  'width-column': 180,
  label: 'Date',
  stripe: false,
  border: false,
  'prop-column-1': 'date',
  'prop-column-2': 'name',
  'prop-column-3': 'address',
};
Basic.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7476%3A175178',
  },
};
export const StripedTable: Story = Template.bind({});
StripedTable.args = {
  ...Basic.args,
  stripe: true,
};
StripedTable.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7476%3A175178',
  },
};
export const TableWithFixedColumns: Story = Template.bind({});
TableWithFixedColumns.args = {
  ...Basic.args,
  fixed: 'right',
};
TableWithFixedColumns.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/NjqLtMVrqA1WnIy2dFmncy/Element-Plus-Design-System(Components)-(Community)?node-id=7476%3A175178',
  },
};

const TableWithSearchBoxTemplate = (args: any) => ({
  components: { TableWithColumnSearchBox, ElTable, ElTableColumn },
  setup() {
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
    return { args, tableData };
  },
  template: ` <TableWithColumnSearchBox/>
`,
});

export const withSearchBox :Story = TableWithSearchBoxTemplate.bind({});
