import { getUserRulesFromSession } from "@/api/user/user";
import { Rules } from "@/contants/rules";
import { useToast } from "vue-toastification";

export const checkRolesMiddleware = async (to, from, next) => {
  const rulesList = getUserRulesFromSession();
  const rules = rulesList.map((rule: any) => rule.tag);
  const canEnter = rules?.includes(Rules.ADD_TERMINAL) || false;
  const toast = useToast();
  if (!canEnter) {
    toast.error("У вас немає доступу до цієї сторінки!");
    return next(from.path);
  }

  return next();
};
