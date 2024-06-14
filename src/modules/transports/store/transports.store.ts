import { format } from "@/components/fields/DatepickerField/format";
import { Transport } from "../models/transport";
import { createTransport, getTransports } from "../api/transports.api";
import router from "@/app/router";

type TransportsState = {
  transports: Transport[];
  loading: boolean;
  formLoading: boolean;
};

export enum TransportsActions {
  GET_TRANSPORTS = "get_transports",
  SET_TRANSPORTS = "set_transports",
  SET_LOADING = "set_loading",
  SET_FORM_LOADING = "set_form_loading",
  CREATE_TRANSPORT = "create_transport",
}

const state = (): TransportsState => ({
  transports: [],
  loading: false,
  formLoading: false,
});

const mutations = {
  [TransportsActions.SET_TRANSPORTS](
    state: TransportsState,
    transports: Transport[]
  ) {
    state.transports = transports;
  },

  [TransportsActions.SET_LOADING](state: TransportsState, loading: boolean) {
    state.loading = loading;
  },
};

const actions = {
  async [TransportsActions.GET_TRANSPORTS]({ commit }: any, filters: any) {
    try {
      commit(TransportsActions.SET_LOADING, true);

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

      const transports = await getTransports();

      commit(
        TransportsActions.SET_TRANSPORTS,
        transformForTable(transports || [])
      );

      commit(TransportsActions.SET_LOADING, false);
    } catch (error) {
      commit(TransportsActions.SET_TRANSPORTS, []);
      commit(TransportsActions.SET_LOADING, false);
    }
  },
  async [TransportsActions.CREATE_TRANSPORT](
    { commit }: any,
    { payload, toast }: any
  ) {
    try {
      commit(TransportsActions.SET_FORM_LOADING, true);

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

      await createTransport(payload);
      router.push({ name: "transportList" });
      toast.success("ТС успішно створено!");

      commit(TransportsActions.SET_FORM_LOADING, false);
    } catch (error) {
      commit(TransportsActions.SET_FORM_LOADING, false);
    }
  },
};

const transformForTable = (transport: Transport[]) => {
  return transport.map((transport) => ({
    ...transport,
    subRows: [
      {
        "Середня швидкість": transport.avg_speed,
        "Кількість пасажирів": transport.passenger_amount,
        "Оплата готівкою": transport.payment_cash,
        "Оплата карткою": transport.payment_card,
        "Кількість пільговиків": transport.beneficiary_count,
        "Посилання відкрити камеру": transport.camera_link,
        "Час додавання": transport.created_at,
        Статус: transport.status,
        "Дата проходження наступного ТО": transport.next_to_date,
      },
    ],
  }));
};

export default {
  state,
  mutations,
  actions,
};
