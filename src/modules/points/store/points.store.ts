import { defineStore } from "pinia";
import { createPointsWithIds, uploadFiscalKey } from "../api/points.api";
import { AddPointsRequest, PointsRequest } from "../model/points-request";

import router from "@/app/router";

export const usePointsStore = defineStore("points", {
  state: () => ({
    pointsByKey: [
      { address: "111", PointName: "aaa", id: 1 },
      { address: "222", PointName: "bbb", id: 2 },
    ],
  }),

  actions: {
    async uploadFiscalKey(request: PointsRequest) {
      const reponse = await uploadFiscalKey(request);

      if (reponse.code === 0) {
        this.pointsByKey = reponse.data;
      }
      router.push({ name: "fiscalAdd" });
    },

    async addPointsWithIds(request: AddPointsRequest) {
      const reponse = await createPointsWithIds(request);

      if (reponse.code === 0) {
        this.pointsByKey = reponse.data;
      }
    },
  },
});
