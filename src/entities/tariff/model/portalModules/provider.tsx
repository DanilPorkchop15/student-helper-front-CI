import type React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { PortalModulesService } from "./service";

export const PortalModulesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const portalModulesService = useInjectService(PortalModulesService);
  const { loading } = useAsync(portalModulesService.loadPortalModules.bind(portalModulesService), []);

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getTariffsUrl(true)} />}>{children}</ErrorBoundary>;
};
