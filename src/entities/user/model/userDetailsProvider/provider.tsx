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
  const userDetailsService = useInjectService(UserDetailsService);

  if (!userDetailsService.userDetails) throw new Error("userDetails not found");

  return <ErrorBoundary fallback={<Navigate replace to={AppRoutes.getAuthUrl()} />}>{children}</ErrorBoundary>;
});
