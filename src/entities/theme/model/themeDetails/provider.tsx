import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { ThemeDetailsService } from "./service";

export const ThemeDetailsProvider = React.memo(function ThemeDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();

  const themeDetailsService = useInjectService(ThemeDetailsService);

  const { loading } = useAsync(
    async () => themeDetailsService.loadThemeDetails.bind(themeDetailsService)(id ? Number(id) : 1),
    [],
  );

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getHomeUrl()} />}>{children}</ErrorBoundary>;
});
