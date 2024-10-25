import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useParams } from "react-router-dom";
import { useAsync } from "react-use";
import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { CustomerInfoService } from "./service";

export const CustomerInfoProvider = React.memo(function CustomerInfoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();

  const customerInfoService = useInjectService(CustomerInfoService);

  const { loading } = useAsync(async () => {
    if (!isNil(id) && !isNaN(Number(id)))
      await customerInfoService.loadCustomerInfo.bind(customerInfoService)({ urlParams: { id: Number(id) } });
  }, [id]);

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getCustomersUrl()} />}>{children}</ErrorBoundary>;
});
