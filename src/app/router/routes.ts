import { RouteRecordRaw } from "vue-router";
import { checkRolesMiddleware } from "./middlewares/check-roles.middleware";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    component: () => import("@/views/Terminals/TerminalsListView.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/views/SignIn/SignInView.vue"),
  },
  {
    path: "/reset-password",
    name: "reset",
    component: () => import("@/views/ResetPassword/ResetPasswordView.vue"),
  },
  {
    path: "/confirm-code",
    name: "confirm",
    component: () => import("@/views/ConfirmCode/ConfirmCodeView.vue"),
  },
  {
    path: "/confirm-password",
    name: "confirmPassword",
    component: () => import("@/views/ConfirmPassword/ConfirmPasswordView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignUp/SignUpView.vue"),
  },
  {
    path: "/singup/banking",
    name: "banking",
    component: () => import("@/views/SignUpBanking/SignUpBankingView.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/views/AuthWelcome/AuthWelcomeView.vue"),
  },
  {
    path: "/points",
    children: [
      {
        path: "create",
        name: "fiscalCreate",
        component: () => import("@/modules/points/pages/CreatePointPage.vue"),
      },
      {
        path: "non-fiscal",
        name: "nonFiscalCreate",
        component: () =>
          import("@/modules/points/pages/CreateNonFiscalPointPage.vue"),
      },
      {
        path: "fiscal/add",
        name: "fiscalAdd",
        component: () =>
          import("@/modules/points/pages/AddPointsFromKeyPage.vue"),
      },
    ],
  },

  {
    path: "/users",
    children: [
      {
        path: "create",
        name: "usersCreate",
        component: () => import("@/views/Users/CreateUserView.vue"),
      },
      {
        path: "",
        name: "users",
        component: () => import("@/views/Users/UsersListView.vue"),
      },
      {
        path: "statistics/:id",
        name: "userStatistics",
        component: () => import("@/views/Users/UserStatisticsView.vue"),
      },
      {
        path: "manage",
        name: "manageUsers",
        component: () => import("@/views/ManageUsers/BranchesView.vue"),
      },
      {
        path: "manage/:id",
        name: "manageUser",
        component: () => import("@/views/ManageUsers/BranchUsersView.vue"),
      },
      {
        path: "manage/:id/schedule",
        name: "userSchedule",
        component: () => import("@/views/ManageUsers/UserScheduleView.vue"),
      },
    ],
  },
  {
    path: "/qr",
    component: () => import("@/views/QRScannerView/QRScannerView.vue"),
  },
  {
    path: "/terminals",
    children: [
      {
        path: "",
        name: "terminals",
        component: () => import("@/views/Terminals/TerminalsListView.vue"),
      },
      {
        path: "create",
        name: "createTerminal",
        component: () => import("@/views/Terminals/CreateTerminalView.vue"),
      },
      {
        path: "edit",
        name: "editTerminal",
        component: () => import("@/views/Terminals/EditTerminalView.vue"),
      },

      {
        path: "success",
        name: "offlineTerminalSuccess",
        component: () => import("@/views/Terminals/SuccessOfflineView.vue"),
      },
    ],
  },
  {
    path: "/terminal_config",
    name: "terminal_config",
    component: () => import("@/views/Terminals/CreateOfflineTerminalView.vue"),
  },
  {
    path: "/offline",
    name: "offlineTerminal",
    component: () => import("@/views/Terminals/CreateOfflineTerminalView.vue"),
  },
  {
    path: "/transactions",
    component: () =>
      import("@/modules/transactions/pages/TransactionsListPage.vue"),
  },
  {
    path: "/ecomm_terminal",
    component: () => import("@/views/Ecomm/CreateEcommTerminalView.vue"),
  },
  {
    path: "/Terminal/Activate",
    name: "activateTerminal",
    beforeEnter: checkRolesMiddleware,
    component: () => import("@/views/Terminals/ActivateTerminalView.vue"),
  },
  {
    path: "/Loyalty/Create",
    component: () => import("@/views/Loyalty/CreateLoyaltyView.vue"),
  },
  {
    path: "/Routes",
    component: () => import("@/modules/routes/ui/RoutesIndex.vue"),
  },
  {
    path: "/Routes/Create",
    name: "createRoute",
    component: () => import("@/modules/routes/ui/CreateRoute.vue"),
  },
  {
    path: "/Route",
    name: "showRoute",
    component: () => import("@/modules/routes/ui/RouteShow.vue"),
  },
  {
    path: "/Route/Update",
    name: "updateRoute",
    component: () => import("@/modules/routes/ui/RouteUpdate.vue"),
  },
  {
    path: "/Transports",
    name: "transportList",
    component: () => import("@/modules/transports/ui/TransportsIndex.vue"),
  },
  {
    path: "/Transports/Create",
    name: "createTransport",
    component: () => import("@/modules/transports/ui/CreateTransport.vue"),
  },
  {
    path: "/Drivers",
    name: "driversList",
    component: () => import("@/modules/drivers/ui/DriversIndex.vue"),
  },
  {
    path: "/Drivers/Create",
    name: "createDriver",
    component: () => import("@/modules/drivers/ui/CreateDriver.vue"),
  },
  {
    path: "/branches",
    name: "branches",
    component: () => import("@/modules/branches/pages/BranchesListPage.vue"),
  },
  {
    path: "/branches/:id",
    name: "branch",
    component: () => import("@/modules/branches/pages/BranchShowPage.vue"),
  },
  {
    path: "/branches/edit",
    name: "editBranch",
    component: () => import("@/modules/branches/pages/BranchShowPage.vue"),
  },
  {
    path: "/ingredient/create",
    name: "createIngredient",
    component: () => import("@/modules/stock/pages/CreateIngredientPage.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/modules/products/pages/ProductsPage.vue"),
  },
  {
    path: "/products/create",
    name: "createProduct",
    component: () => import("@/modules/products/pages/CreateProductPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/modules/errors/pages/not-found.vue"),
  },
];
