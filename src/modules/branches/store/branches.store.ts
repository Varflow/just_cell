import { defineStore } from "pinia";
import { Branch } from "../model/branch";
import { getBranches } from "../api/branches.api";

export type BranchesState = {
  branches: Branch[];
  isLoading: boolean;
};

export const useBranchesStore = defineStore("branches", {
  state: (): BranchesState => ({ branches: [], isLoading: false }),
  actions: {
    getBranches() {
      this.isLoading = true;
      this.branches = getBranches();
      this.isLoading = false;
    },
  },
});
