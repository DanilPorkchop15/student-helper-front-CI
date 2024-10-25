import { Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { Header, HeaderProvider } from "widgets/header";
import { Sidebar } from "widgets/sidebar";

import { UserDetailsProvider } from "entities/user";

import { AppRoutes } from "shared/model/services";
import { Layout } from "shared/ui/layout";

export const browserRouter = createBrowserRouter([
  {
    path: "*",
    element: "error",
  },
  {
    path: AppRoutes.getHomeUrl(),
    element: (
      <UserDetailsProvider>
        <HeaderProvider>
          <Layout.Main content={<Outlet />} footer={<Layout.Footer />} header={<Header />} sidebar={<Sidebar />} />
        </HeaderProvider>
      </UserDetailsProvider>
    ),
    children: [
      { index: true, lazy: async () => import("pages/home") },
      { path: AppRoutes.getUsersUrl(), lazy: async () => import("pages/users/table") },
      { path: AppRoutes.getUpdateUserUrl(true), lazy: async () => import("pages/users/update") },
      { path: AppRoutes.getSettingsUrl(true), lazy: async () => import("pages/settings") },
      {
        path: AppRoutes.getTariffsUrl(true),
        lazy: async () => import("pages/tariffs/table"),
        children: [{ path: AppRoutes.getCreateTariffUrl(true), lazy: async () => import("pages/tariffs/create") }],
      },
      { path: AppRoutes.getTariffDetailsUrl(true), lazy: async () => import("pages/tariffs/edit") },
      {
        path: AppRoutes.getCustomersUrl(true),
        lazy: async () => import("pages/customers/table"),
        children: [{ path: AppRoutes.getCreateCustomerUrl(true), lazy: async () => import("pages/customers/create") }],
      },
      { path: AppRoutes.getCustomerInfoUrl(true), lazy: async () => import("pages/customers/edit") },
    ],
  },
  {
    path: AppRoutes.getAuthUrl(),
    element: <Layout.Auth content={<Outlet />} />,
    children: [
      { index: true, lazy: async () => import("pages/auth/login") },
      { path: AppRoutes.getResetPasswordUrl(), lazy: async () => import("pages/auth/resetPassword") },
      { path: AppRoutes.getChangePasswordUrl(), lazy: async () => import("pages/auth/changePassword") },
      {
        path: AppRoutes.getResetPasswordSuccessUrl(),
        lazy: async () => import("pages/auth/resetPasswordSuccess"),
      },
    ],
  },
]);
