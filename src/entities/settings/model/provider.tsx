import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { SettingsService } from "./service";

export const SettingsProvider = React.memo(function SettingsProvider({ children }: { children: React.ReactNode }) {
  const settingsService = useInjectService(SettingsService);

  const { loading } = useAsync(async () => settingsService.loadSettings(), []);

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getAuthUrl()} />}>{children}</ErrorBoundary>;
});
