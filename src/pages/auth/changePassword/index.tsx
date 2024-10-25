import React from "react";
import { useTitle } from "react-use";

import { ChangePasswordFeature } from "features/auth/changePassword";

import { AppTitles } from "shared/model/services";

function ChangePasswordPage() {
  useTitle(AppTitles.getChangePasswordTitle());

  return <ChangePasswordFeature />;
}

export const Component = React.memo(ChangePasswordPage);
