import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { authMiddleware } from "./middlewares/auth.middleware";
import { useRouterStore } from "./router.store";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(authMiddleware);
router.beforeResolve((to, from, next) => {
  const routerStore = useRouterStore();
  routerStore.setLoading(false);
  next();
});

export default router;
