import React from "react";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { Flex, Typography } from "antd";

import { LogoutFeature } from "features/auth/logout";

import { UserView, useUserDetails } from "entities/user";

import { AppRoutes } from "shared/model/services";

export const UserWidget = observer(function UserWidget() {
  const navigate = useNavigate();
  const userProfile = useUserDetails();

  return (
    <Flex align="center" flex="1" gap={15} justify="space-between" style={{ width: "100%" }}>
      <Flex align="center" gap={15}>
        <UserView.Avatar user={userProfile.state} />
        {/* TODO: add right id */}
        <Typography.Title level={5} onClick={() => navigate(AppRoutes.getUpdateUserUrl(true, 1))}>
          {userProfile.state.fullName}
        </Typography.Title>
      </Flex>
      <LogoutFeature />
    </Flex>
  );
});
