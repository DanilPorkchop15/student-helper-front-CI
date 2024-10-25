import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useParams } from "react-router-dom";
import { useAsync } from "react-use";
import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { TariffDetailsService } from "./service";

export const TariffDetailsProvider = React.memo(function TariffDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();

  const tariffDetailsService = useInjectService(TariffDetailsService);

  const { loading } = useAsync(async () => {
    if (!isNil(id) && !isNaN(Number(id)))
      await tariffDetailsService.loadTariffDetails.bind(tariffDetailsService)({ urlParams: { id: Number(id) } });
  }, [id]);

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getTariffsUrl()} />}>{children}</ErrorBoundary>;
});
