import { format } from "@/components/fields/DatepickerField/format";
import { Driver } from "../models/driver";
import {
  changeDriverTransport,
  changerDriverRoute,
  createDriver,
  getDrivers,
} from "../api/drivers.api";
import router from "@/router";

type DriversState = {
  drivers: Driver[];
  driversForView: Driver[];
  loading: boolean;
  formLoading: boolean;
};

export enum DriversActions {
  GET_DRIVERS = "get_drivers",
  SET_DRIVERS = "set_drivers",
  SET_DRIVERS_FOR_VIEW = "set_drivers_for_view",
  SET_LOADING = "set_loading",
  SET_FORM_LOADING = "set_form_loading",
  CREATE_DRIVER = "create_driver",
  CHANGE_TRANSPORT = "change_transport",
  CHANGE_ROUTE = "change_route",
  SEARCH_DRIVER = "search_driver",
}

const state = (): DriversState => ({
  drivers: [],
  driversForView: [],
  loading: false,
  formLoading: false,
});

const mutations = {
  [DriversActions.SET_DRIVERS](state: DriversState, drivers: Driver[]) {
    state.drivers = drivers;
  },
  [DriversActions.SET_DRIVERS_FOR_VIEW](
    state: DriversState,
    drivers: Driver[]
  ) {
    state.driversForView = drivers;
  },

  [DriversActions.SET_LOADING](state: DriversState, loading: boolean) {
    state.loading = loading;
  },
  [DriversActions.SET_FORM_LOADING](state: DriversState, loading: boolean) {
    state.formLoading = loading;
  },
};

const actions = {
  async [DriversActions.GET_DRIVERS]({ commit }: any, filters: any) {
    try {
      commit(DriversActions.SET_LOADING, true);

      // const DateFrom = filters.DateFrom || format(new Date());
      // const DateTo = filters.DateTo || format(new Date());
      // const filtersData = {
      //   ...filters,
      //   DateFrom,
      //   DateTo,
      //   page: filters.page || 0,
      //   perPage: filters.perPage || 10,
      //   alloc_type: filters.alloc_type,
      // };

      const drivers = await getDrivers();

      commit(DriversActions.SET_DRIVERS, drivers || []);
      commit(DriversActions.SET_DRIVERS_FOR_VIEW, drivers || []);

      commit(DriversActions.SET_LOADING, false);
    } catch (error) {
      commit(DriversActions.SET_DRIVERS, []);
      commit(DriversActions.SET_DRIVERS_FOR_VIEW, []);
      commit(DriversActions.SET_LOADING, false);
    }
  },
  async [DriversActions.CREATE_DRIVER](
    { commit }: any,
    { payload, toast }: any
  ) {
    try {
      commit(DriversActions.SET_FORM_LOADING, true);

      await createDriver(payload);
      router.push({ name: "driversList" });
      toast.success("Водій успішно створено!");

      commit(DriversActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(DriversActions.SET_FORM_LOADING, false);
    }
  },
  async [DriversActions.CHANGE_TRANSPORT](
    { commit }: any,
    { payload, toast }: any
  ) {
    try {
      commit(DriversActions.SET_FORM_LOADING, true);

      await changeDriverTransport(payload);
      toast.success("Транспорт успішно змінено!");

      commit(DriversActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(DriversActions.SET_FORM_LOADING, false);
    }
  },
  async [DriversActions.CHANGE_ROUTE](
    { commit }: any,
    { payload, toast }: any
  ) {
    try {
      commit(DriversActions.SET_FORM_LOADING, true);

      await changerDriverRoute(payload);
      toast.success("Маршрут успішно змінено!");

      commit(DriversActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(DriversActions.SET_FORM_LOADING, false);
    }
  },
  async [DriversActions.SEARCH_DRIVER]({ commit, state }: any, { query }: any) {
    try {
      const drivers = state.drivers;
      const filteredDrivers = drivers.filter((driver: Driver) =>
        driver.name.toLowerCase().includes(query.toLowerCase())
      );

      if (!query.length) {
        commit(DriversActions.SET_DRIVERS_FOR_VIEW, drivers);
        return;
      }

      commit(DriversActions.SET_DRIVERS_FOR_VIEW, filteredDrivers);
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
