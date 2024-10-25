import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { AppTitles } from "shared/model/services";

function ResetPasswordSuccess() {
  useTitle(AppTitles.getResetPasswordSuccessTitle());

  return (
    <div>
      <Typography.Title level={4}>
        На вашу почту отправлено письмо со ссылкой для восстановления пароля
      </Typography.Title>
    </div>
  );
}

export const Component = React.memo(ResetPasswordSuccess);
