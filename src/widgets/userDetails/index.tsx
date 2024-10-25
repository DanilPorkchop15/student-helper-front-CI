import React from "react";
import { Flex, Typography } from "antd";

import { ChangePasswordFeature } from "features/users/changePassword";

import { useUserDetails } from "entities/user";

export const UserUpdateWidget = React.memo(function Profile() {
  const userDetails = useUserDetails();

  return (
    <>
      <Typography.Title level={3}>Редактирование профиля</Typography.Title>
      <Flex>
        <Flex vertical>
          <Flex vertical>
            <Typography.Title level={5}>Имя</Typography.Title>
            <Typography.Paragraph>{userDetails.state.name}</Typography.Paragraph>
          </Flex>
          <Flex vertical>
            <Typography.Title level={5}>Фамилия</Typography.Title>
            <Typography.Paragraph>{userDetails.state.surname}</Typography.Paragraph>
          </Flex>
          <Flex vertical>
            <Typography.Title level={5}>Почта</Typography.Title>
            <Typography.Paragraph>{userDetails.state.email}</Typography.Paragraph>
          </Flex>
        </Flex>
      </Flex>
      <ChangePasswordFeature />
    </>
  );
});
