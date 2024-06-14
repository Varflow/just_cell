import { useRouterStore } from "../router.store";
import { isAuthorized } from "@/api/auth/checkAuth";
import { store } from "@/store";
import { UserActions } from "@/store/modules/user";

const authExcludedRoutes = ["signin", "signup", "reset", "confirmPassword"];

export const authMiddleware = async (to, from, next) => {
  const routerStore = useRouterStore();
  if (!authExcludedRoutes.includes(to.name as string)) {
    routerStore.setLoading(true);

    const authorized = await isAuthorized();

    if (!authorized) {
      routerStore.setLoading(true);
      return next({ name: "signin", query: { redirect: to.fullPath } });
    }
  }

  routerStore.setLoading(true);
  store.commit(UserActions.SET_USER);
  return next();
};
