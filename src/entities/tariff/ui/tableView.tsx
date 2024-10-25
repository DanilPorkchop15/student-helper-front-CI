import React from "react";
import { Link } from "react-router-dom";
import { Table, type TableProps, Typography } from "antd";

import { AppRoutes } from "shared/model/services";

import type { PortalModule, TariffListItem } from "../interfaces";

import { PortalModulesField } from "./PortalModulesField";

const columns: TableProps<TariffListItem>["columns"] = [
  {
    title: "Название",
    dataIndex: "title",
    key: "title",
    sorter: true,
    render: (title: TariffListItem["title"], record: TariffListItem) => (
      <Link to={AppRoutes.getTariffDetailsUrl(true, record.id)}>
        <Typography.Link>{title}</Typography.Link>
      </Link>
    ),
  },
  {
    title: "Доступные модули",
    dataIndex: "portalModules",
    key: "portalModules",
    render: (portalModules: PortalModule[]) => <PortalModulesField portalModules={portalModules} />,
  },
  {
    title: "Стоимость",
    dataIndex: "cost",
    key: "cost",
    render: (cost: TariffListItem["cost"]) => (
      <>
        <Typography.Text>{cost.month} руб./мес</Typography.Text>
        <br />
        <Typography.Text>{cost.year} руб./год</Typography.Text>
      </>
    ),
  },
  {
    title: "Кол-во аккаунтов",
    dataIndex: "countAccounts",
    key: "countAccounts",
  },
  {
    title: "Добавлен",
    dataIndex: "createdAt",
    key: "createdAt",
    sorter: true,
  },
  {
    title: "Изменен",
    dataIndex: "updatedAt",
    key: "updatedAt",
    sorter: true,
  },
  {
    title: "Архивный",
    dataIndex: "isArchived",
    key: "archived",
    filters: [{ text: "Показывать архивные", value: "Y" }],
    render: (isArchived) => <Typography.Text>{isArchived ? "Да" : "Нет"}</Typography.Text>,
  },
];

export const TariffsTableView = React.memo(function TariffsTableView({
  columns: propsColumns = [],
  ...props
}: TableProps<TariffListItem>) {
  return <Table<TariffListItem> columns={[...columns, ...propsColumns]} style={{ width: "100%" }} {...props} />;
});
