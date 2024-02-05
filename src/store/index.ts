import { createStore } from "vuex";

import users from "./modules/user";
import terminals from "./modules/terminals";
import auth from "./modules/auth";
import { routes } from "../modules/routes";
import { transports } from "../modules/transports";
import { drivers } from "../modules/drivers";
import router from "./modules/router";
import transactions from "@/modules/transactions/store/transactions.store";

export const store = createStore({
  modules: {
    users,
    terminals,
    auth,
    transactions,
    router,
    routes,
    transports,
    drivers,
  },
});
