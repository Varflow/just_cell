import { format } from "@/components/fields/DatepickerField/format";
import { Route } from "../models/routes";
import { createRoute, getRoute, getRoutes } from "../api/routes.api";
import router from "@/app/router";

type RoutesState = {
  routes: Route[];
  route: Route | null;
  loading: boolean;
  formLoading: boolean;
};

export enum RoutesActions {
  GET_ROUTES = "get_routes",
  GET_ROUTE = "get_route",
  SET_ROUTE = "set_route",
  CLEAR_ROUTE = "clear_route",
  SET_ROUTES = "set_routes",
  SET_LOADING = "set_loading",
  SET_FORM_LOADING = "set_form_loading",
  CREATE_ROUTE = "create_route",
}

const state = (): RoutesState => ({
  routes: [],
  route: null,
  loading: false,
  formLoading: false,
});

const mutations = {
  [RoutesActions.SET_ROUTES](state: RoutesState, routes: Route[]) {
    state.routes = routes;
  },
  [RoutesActions.SET_ROUTE](state: RoutesState, route: Route) {
    state.route = route;
  },
  [RoutesActions.SET_LOADING](state: RoutesState, loading: boolean) {
    state.loading = loading;
  },
  [RoutesActions.SET_FORM_LOADING](state: RoutesState, loading: boolean) {
    state.formLoading = loading;
  },
};

const actions = {
  async [RoutesActions.GET_ROUTES]({ commit }: any, filters: any) {
    try {
      commit(RoutesActions.SET_LOADING, true);

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

      const routes = await getRoutes();

      commit(RoutesActions.SET_ROUTES, routes || []);

      commit(RoutesActions.SET_LOADING, false);
    } catch (error) {
      commit(RoutesActions.SET_ROUTES, []);
      commit(RoutesActions.SET_LOADING, false);
    }
  },
  async [RoutesActions.GET_ROUTE]({ commit }: any) {
    try {
      const route = await getRoute();

      commit(RoutesActions.SET_ROUTE, route);

      commit(RoutesActions.SET_LOADING, false);
    } catch (error) {
      commit(RoutesActions.SET_ROUTE, null);
      commit(RoutesActions.SET_LOADING, false);
    }
  },
  async [RoutesActions.CREATE_ROUTE]({ commit }: any, { payload, toast }: any) {
    try {
      commit(RoutesActions.SET_FORM_LOADING, true);

      await createRoute(payload);
      router.push({ name: "transportList" });
      toast.success("Маршрут успішно створено!");

      commit(RoutesActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(RoutesActions.SET_FORM_LOADING, false);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
