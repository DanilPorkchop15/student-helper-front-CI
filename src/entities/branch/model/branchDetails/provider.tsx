import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { BranchDetailsService } from "./service";

export const BranchDetailsProvider = React.memo(function BranchDetailsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();

  const branchDetailsService = useInjectService(BranchDetailsService);

  const { loading } = useAsync(
    async () => branchDetailsService.loadBranchDetails.bind(branchDetailsService)(id ? Number(id) : 1),
    [],
  );

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getHomeUrl()} />}>{children}</ErrorBoundary>;
});