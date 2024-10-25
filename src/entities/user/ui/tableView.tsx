import React from "react";
import { Link } from "react-router-dom";
import { Table, type TableProps, Typography } from "antd";

import type { UserListItem } from "../interfaces";

import { UserView } from "./index";

const columns: TableProps<UserListItem>["columns"] = [
  {
    title: "",
    key: "avatar",
    render: (user: UserListItem) => <UserView.Avatar user={user} />,
  },
  {
    title: "Имя",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Фамилия",
    dataIndex: "lastName",
    sorter: true,
    defaultSortOrder: "ascend",
    key: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (email) => <Link to={`mailto:${email}`}>{email}</Link>,
  },
  {
    title: "blocked",
    key: "blocked",
    dataIndex: "blocked",
    sorter: true,
    render: (blocked) => <Typography.Text type={blocked ? "danger" : undefined}>{String(blocked)}</Typography.Text>,
  },
];

export const UsersTableView = React.memo(function UsersTableView({
  columns: propsColumns = [],
  ...props
}: TableProps<UserListItem>) {
  return <Table<UserListItem> columns={[...columns, ...propsColumns]} {...props} />;
});
