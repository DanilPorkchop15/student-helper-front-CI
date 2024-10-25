import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { useAsync } from "react-use";

import { useInjectService } from "shared/lib/useInjectService";
import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { UserDetailsService } from "./service";

export const UserDetailsProvider = React.memo(function UserProfileProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();

  //TODO add right id
  const userDetailsService = useInjectService(UserDetailsService);

  const { loading } = useAsync(
    async () => userDetailsService.loadUserDetails.bind(userDetailsService)(id ? Number(id) : 1),
    [],
  );

  if (loading) return <PageSpin />;

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getAuthUrl()} />}>{children}</ErrorBoundary>;
});
