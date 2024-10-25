import React from "react";
import { Link, useLocation } from "react-router-dom";
import { string1 } from "@worksolutions/utils";
import { Flex, Layout, Menu, MenuProps, Typography } from "antd";
import classNames from "classnames";
import { memoizeWith } from "ramda";

import { AppRoutes } from "shared/model/services";

import "./antdSiderMenuOverride.scss";

import styles from "./index.module.scss";
import { UserWidget } from "./UserWidget";

const menuItemRoutes = [
  {
    key: AppRoutes.getUsersUrl(),
    label: <Link to={AppRoutes.getUsersUrl()}>Пользователи</Link>,
  },
  {
    key: AppRoutes.getTariffsUrl(),
    label: <Link to={AppRoutes.getTariffsUrl()}>Тарифы</Link>,
  },
  {
    key: AppRoutes.getCustomersUrl(),
    label: <Link to={AppRoutes.getCustomersUrl()}>Клиенты</Link>,
  },
  {
    key: AppRoutes.getAccountsUrl(),
    label: <Link to={AppRoutes.getAccountsUrl()}>Аккаунты</Link>,
  },
  {
    key: AppRoutes.getSettingsUrl(),
    label: <Link to={AppRoutes.getSettingsUrl()}>Настройки</Link>,
  },
];

const menuItems: MenuProps["items"] = [
  {
    type: "group",
    children: menuItemRoutes,
  },
];

const findActiveKey: (pathname: string) => string | undefined = memoizeWith(string1, (pathname) => {
  let matchKey: string | undefined;

  for (const route of menuItemRoutes) {
    if (route.key === pathname) {
      matchKey = route.key;
      break;
    }

    if (pathname.startsWith(route.key)) {
      matchKey = route.key;
    }
  }
  return matchKey;
});

export const Sidebar = React.memo(function Sidebar() {
  const { pathname } = useLocation();
  const activeKey = findActiveKey(pathname);
  const selectedKeys = activeKey ? [activeKey] : [];

  return (
    <Layout.Sider className={classNames(styles.sider)} width={370}>
      <Flex
        vertical
        className={classNames(styles["sider-wrapper"], "antd-sider-menu-override")}
        justify="space-between"
      >
        <Flex vertical gap={10}>
          <Link to={AppRoutes.getHomeUrl()}>
            <img alt="Логотип Work Solutions" className={styles["sider-logo"]} src="/assets/grys-logo.svg" />
            <Typography.Title className={styles["sider-title"]} level={2}>
              Система управления порталами
            </Typography.Title>
          </Link>
        </Flex>
        <Menu className={styles.menu} items={menuItems} mode="inline" selectedKeys={selectedKeys} />
        <Flex align="center" className={classNames(styles["user-block"])}>
          <UserWidget />
        </Flex>
      </Flex>
    </Layout.Sider>
  );
});
