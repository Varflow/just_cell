import { http } from "@/api/client";
import { ApiRoutes } from "@/api/routes";

import {
  ExportTransactionFilters,
  Transaction,
  TransactionFilters,
} from "./transactions.model";

type TransactionsList = {
  transactions: Transaction[];
  total: number;
  sum: number;
};

export const getTransactionsList = async (
  filters: TransactionFilters
): Promise<TransactionsList> => {
  const { data } = await http.post(ApiRoutes.TRANSACTIONS_LIST, filters);

  return {
    transactions: data.data?.map((item: any) => ({
      ...item,
      subRows: [
        {
          "ID термінала": item.terminal_id,
          RRN: item.rrn,
          "Фіскальний номер": item.tax_num,
          "Транзакцію повернуто": JSON.parse(item.is_revers) ? "Так" : "Ні",
          "Сумма повернення": item.revers_amount,
          "Час повернення": item.revers_time,
          "Час оплати": item.payment_time,
          Відповідь: item.answ_description,
          "Код відповіді": item.answ_code,
          Дата: item.add_time,
          Компанія: item.client_name,
          "Маска карти": item.pan_mask,
          Банк: item.bank_name,
          // "Форма оплати": item.pay_type,
        },
      ],
    })),
    total: parseInt(data.total),
    sum: data.sum,
  };
};

export const getTransactionForExport = async (
  filters: ExportTransactionFilters
) => {
  const { data } = await http.post(ApiRoutes.TRANSACTIONS_LIST, filters);

  return data.data;
};
