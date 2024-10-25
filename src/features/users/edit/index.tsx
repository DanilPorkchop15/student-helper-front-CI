import React from "react";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";

import type { UserListItem } from "entities/user";

import { AppRoutes } from "shared/model/services";

export const EditUserFeature = React.memo(function EditUserFeature({ user }: { user: UserListItem }) {
  return (
    <Link to={AppRoutes.getUpdateUserUrl(false, user.id)}>
      <EditOutlined />
    </Link>
  );
});
