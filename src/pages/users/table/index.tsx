import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";
import { UsersTableWidget } from "widgets/users/table";

import { UsersTableModuleProvider } from "entities/user";

import { AppTitles } from "shared/model/services";

function Users() {
  useTitle(AppTitles.getUsersTitle());
  useHeader(<Typography.Title level={2}>Пользователи</Typography.Title>);

  return (
    <div>
      <UsersTableModuleProvider>
        <UsersTableWidget />
      </UsersTableModuleProvider>
    </div>
  );
}

export const Component = React.memo(Users);
