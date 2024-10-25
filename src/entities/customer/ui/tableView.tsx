import React from "react";
import { Table, type TableProps } from "antd";

import type { CustomerListItem } from "../interfaces";

export const CustomersTableView = React.memo(function CustomersTableView({
  columns = [],
  ...props
}: TableProps<CustomerListItem> ) {
  return <Table<CustomerListItem> columns={columns} style={{ width: "100%" }} {...props} />;
});
