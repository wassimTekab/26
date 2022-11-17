<template>

  <el-button @click="resetDateFilter">reset date filter</el-button>
  <el-button @click="clearFilter">reset all filters</el-button>
  <el-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
    <el-table-column

    ref="colRef"
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="filteredArray"
      :filter-method="filterHandler"
    />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" :formatter="formatter" />

    <el-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.tag === 'Home' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.tag }}</el-tag
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {
  ref, computed,
} from 'vue';
import {
  ElTable, ElTableColumn, ElButton,
} from 'element-plus';

import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults';

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const tableRef = ref<InstanceType<typeof ElTable>>();
const colRef = ref();
const filterText = ref('');
const inputElt = document.createElement('input');

const resetDateFilter = () => {
  tableRef.value!.clearFilter(['date']);
};
// TODO: improvement typing when refactor table
const clearFilter = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  tableRef.value!.clearFilter();
  filterText.value = '';
  inputElt.value = '';
};
const formatter = (row: User, column: TableColumnCtx<User>) => row.address;
const filterTag = (value: string, row: User) => row.tag === value;
const filterHandler = (
  value: string,
  row: User,
  column: TableColumnCtx<User>,
) => {
  const { property } = column;
  return row[property] === value;
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
];

// integrate inputSearch in the tooltip

setTimeout(() => {
  const elPopper = document.getElementsByClassName('el-popper is-pure is-light el-table-filter')?.[0];
  const resetButton = document.getElementsByClassName('el-table-filter__bottom')?.[0].children[1];
  // set input element attributes
  inputElt.setAttribute('type', 'text');
  inputElt.setAttribute('placeholder', 'Search...');
  inputElt.style.padding = '6px 0px 6px 20px';
  elPopper.setAttribute('table-filter', 'true');
  // insert inputElt in popper component
  if (elPopper) {
    elPopper.insertBefore(inputElt, elPopper.children[0]);
  }

  inputElt.addEventListener('input', (e : any) => {
    filterText.value = e.target.value;
  });
  resetButton.addEventListener('click', () => {
    filterText.value = '';
    inputElt.value = '';
  });
}, 1);

const filters = ref([
  { text: '2016-05-01', value: '2016-05-01' },
  { text: '2016-05-02', value: '2016-05-02' },
  { text: '2016-05-03', value: '2016-05-03' },
  { text: '2016-05-04', value: '2016-05-04' },
]);
const filteredArray = computed(() => filters.value.filter((filterEl) => filterEl.text.includes(filterText.value)));

</script>

<style lang="scss" >
div[table-filter]:before {
    content: ' ';
    width: 20px;
    height: 20px;
    background-image: url("Search.svg");
    position: absolute;
    top: 6px;
    left: 4px;
}
</style>
