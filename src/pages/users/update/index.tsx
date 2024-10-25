import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";
import { UserUpdateWidget } from "widgets/userDetails";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function UpdateUser() {
  useTitle(AppTitles.getUsersTitle());
  useHeader(<Typography.Title level={2}>Пользователи</Typography.Title>);

  return (
    <Layout.Content>
      <UserUpdateWidget />
    </Layout.Content>
  );
}

export const Component = React.memo(UpdateUser);
