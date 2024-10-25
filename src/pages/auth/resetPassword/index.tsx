import React from "react";
import { useTitle } from "react-use";

import { ResetPasswordFeature } from "features/auth/resetPassword";

import { AppTitles } from "shared/model/services";

function ResetPasswordPage() {
  useTitle(AppTitles.getResetPasswordTitle());

  return <ResetPasswordFeature />;
}

export const Component = React.memo(ResetPasswordPage);
