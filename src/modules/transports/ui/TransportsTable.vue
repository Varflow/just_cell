<template lang="">
  <v-table :data="data" :columns="columns" :empty="empty" :total="total" />
</template>
<script setup lang="ts">
import { expandedButton } from "@/components/table/ExpandedButton";
import { createColumnHelper } from "@tanstack/vue-table";
import { Transport } from "../models/transport";

interface TransportsTableProps {
  data: Transport[];
  empty: boolean;
  total: number;
  hasRouteColumn?: boolean;
}

const props = defineProps<TransportsTableProps>();
const columnHelper = createColumnHelper<Transport>();

const columns = [
  columnHelper.accessor("transport_num", {
    cell: (info) => {
      if (props.hasRouteColumn) {
        return info.getValue();
      } else {
        const value = info.getValue();
        const isExpanded = info.row.getIsExpanded();
        const onClick = info.row.getToggleExpandedHandler();
        return expandedButton(value, isExpanded, onClick);
      }
    },
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
];

if (props.hasRouteColumn) {
  columns.unshift(
    columnHelper.accessor("route", {
      cell: (info) => {
        const value = info.getValue();
        const isExpanded = info.row.getIsExpanded();
        const onClick = info.row.getToggleExpandedHandler();
        return expandedButton(value, isExpanded, onClick);
      },
      header: (props) => "Маршрут",
      sortDescFirst: true,
    })
  );
}
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
