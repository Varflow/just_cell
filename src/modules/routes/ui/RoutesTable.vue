<template lang="">
  <v-table
    :data="data"
    :columns="columns"
    :empty="empty"
    :total="total"
    @row-click="onRowClick"
  >
  </v-table>
</template>
<script setup lang="ts">
import { createColumnHelper } from "@tanstack/vue-table";
import { Route } from "../models/routes";

interface TerminalTableProps {
  data: Route[];
  empty: boolean;
  total: number;
}

const columnHelper = createColumnHelper<Route>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: (props) => "Назва",
    sortDescFirst: true,
  }),
  columnHelper.accessor("transport_num", {
    cell: (info) => info.getValue(),
    header: "К-сть ТС",
    sortDescFirst: true,
  }),

  columnHelper.accessor("avg_speed", {
    header: "Сер. швидкість потоку",
    cell: (info) => info.getValue(),
    sortDescFirst: true,
  }),
  columnHelper.accessor("avg_time", {
    header: "Сер. час проходження",
    cell: (info) => info.getValue(),
    sortDescFirst: true,
  }),

  //   columnHelper.display({
  //     cell: (info) => h(TerminalActionsColumn, { terminal: info.row.original }),
  //     header: "Дії",
  //   }),
];

defineProps<TerminalTableProps>();
</script>
<script lang="ts">
import VTable from "@/components/table/VTable.vue";
import { defineComponent } from "vue";
import router from "@/router";
import { ROUTE_STORAGE_KEY } from "@/contants/storage";

export default defineComponent({
  components: {
    VTable,
  },
  methods: {
    onRowClick(row: any) {
      window.localStorage.setItem(
        ROUTE_STORAGE_KEY,
        JSON.stringify(row.original)
      );
      router.push({ name: "showRoute" });
    },
  },
});
</script>
