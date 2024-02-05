<template lang="">
  <v-table :data="data" :columns="columns" :empty="empty" :total="total">
    <!-- <template #context-menu="{ values }">
      <terminal-actions :terminal="values" />
    </template> -->
  </v-table>
</template>
<script setup lang="ts">
import { expandedButton } from "@/components/table/ExpandedButton";
import { createColumnHelper } from "@tanstack/vue-table";
import { Transport } from "../models/transport";

interface TransportsTableProps {
  data: Transport[];
  empty: boolean;
  total: number;
}

const columnHelper = createColumnHelper<Transport>();

const columns = [
  columnHelper.accessor("route", {
    cell: (info) => {
      const value = info.getValue();
      const isExpanded = info.row.getIsExpanded();
      const onClick = info.row.getToggleExpandedHandler();
      return expandedButton(value, isExpanded, onClick);
    },
    header: (props) => "Маршрут",
    sortDescFirst: true,
  }),
  columnHelper.accessor("transport_num", {
    cell: (info) => info.getValue(),
    header: "№ ТС",
    sortDescFirst: true,
  }),

  columnHelper.accessor("driver", {
    header: "Водій",
    cell: (info) => info.getValue(),
    sortDescFirst: true,
  }),
  columnHelper.accessor("geolocation", {
    header: "Розташування",
    cell: (info) => info.getValue(),
    sortDescFirst: true,
  }),
  columnHelper.accessor("drive_time", {
    header: "Час в дорозі",
    cell: (info) => info.getValue(),
    sortDescFirst: true,
  }),

  //   columnHelper.display({
  //     cell: (info) => h(TerminalActionsColumn, { terminal: info.row.original }),
  //     header: "Дії",
  //   }),
];

defineProps<TransportsTableProps>();
</script>
<script lang="ts">
import VTable from "@/components/table/VTable.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    VTable,
  },
});
</script>
