import React from "react";
import { useAsyncFn, useDebounce } from "react-use";
import { observer } from "mobx-react-lite";
import { Row, TableColumnsType } from "antd";

import { DeleteUserFeature } from "features/users/delete";
import { EditUserFeature } from "features/users/edit";

import { type UserListItem, UserView, useUsersTableModule } from "entities/user";

import { paginationLocale, tableLocale } from "shared/config/table";
import { convertDataToTableDataSource, createTableOnChangeHandlerFromTableModule } from "shared/lib/tableUtils";

export const UsersTableWidget = observer(function UsersTableWidget() {
  const usersTableModule = useUsersTableModule();
  const { pagination, filter, sorting, rows, totalCount } = usersTableModule;
  const [{ loading }, loadFn] = useAsyncFn(async () => usersTableModule.load(), []);

  const extraColumns: TableColumnsType<UserListItem> = React.useMemo(
    () => [
      {
        key: "actions",
        render: (user: UserListItem) => (
          <Row>
            <EditUserFeature user={user} />
            <DeleteUserFeature disabled={user.blocked} user={user} onSuccess={loadFn} />
          </Row>
        ),
      },
    ],
    [loadFn],
  );

  useDebounce(loadFn, 400, [
    pagination.state.pageSize,
    pagination.state.pageIndex,
    filter.state.surname,
    filter.state.active,
    sorting.state.orderBy,
    sorting.state.isDescendingOrder,
  ]);

  return (
    <UserView.Table
      columns={extraColumns}
      dataSource={convertDataToTableDataSource(rows)}
      loading={loading}
      locale={tableLocale}
      pagination={{
        locale: paginationLocale,
        position: ["bottomLeft"],
        showQuickJumper: true,
        responsive: true,
        showLessItems: true,
        total: totalCount,
        current: pagination.state.pageIndex,
        pageSize: pagination.state.pageSize,
      }}
      onChange={createTableOnChangeHandlerFromTableModule(usersTableModule)}
    />
  );
});
