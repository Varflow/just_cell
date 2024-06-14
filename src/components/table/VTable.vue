<template>
  <TableEmpty v-if="empty" />
  <table
    v-else
    border="0"
    rules="none"
    class="table"
    :class="{ 'table--empty': empty }"
  >
    <TableHeader :table="table" />
    <TableBody
      v-if="!empty"
      :striped="striped"
      :table="table"
      @row-click="(row) => $emit('row-click', row)"
    >
      <template #context-menu="{ values }">
        <slot name="context-menu" :values="values"></slot>
      </template>
    </TableBody>
  </table>

  <VPagination v-if="hasPagination" :total="total" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import TableBody from "./TableBody.vue";
import TableHeader from "./TableHeader.vue";
import TableEmpty from "./EmptyTable.vue";
import VPagination from "../panigation/VPagination.vue";

import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useVueTable,
} from "@tanstack/vue-table";

interface TableProps {
  columns: ColumnDef<any>[];
  data: any;
  empty: boolean;
  hasPagination: boolean;
  total?: number;
  striped?: boolean;
}

const props = defineProps<TableProps>();
const emits = defineEmits(["row-click"]);
const sorting = ref<SortingState>([]);

const table = useVueTable({
  get data() {
    return props.data;
  },
  state: {
    get sorting() {
      return sorting.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  columns: props.columns,
  getSubRows: (row) => row.subRows,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
});
</script>
