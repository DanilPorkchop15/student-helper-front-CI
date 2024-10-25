import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";

import type { UserListItem } from "entities/user";

import { useConfirmationModal } from "shared/ui/confirmationModal";

import { usersService } from "../services";

interface DeleteUserFeatureInterface {
  user: UserListItem;
  disabled?: boolean;
  onSuccess?: () => void;
}

export const DeleteUserFeature = React.memo(function DeleteUserFeature({
  user,
  disabled,
  onSuccess,
}: DeleteUserFeatureInterface) {
  const [withConfirmation, ConfirmationDialog] = useConfirmationModal();

  const deleteUserFn = async () => {
    await usersService.deleteUser(user.id);
    onSuccess?.();
  };

  return (
    <>
      <ConfirmationDialog
        cancelText="Отменить"
        okText="Удалить"
        subtitle={
          <Typography.Text>
            Вы уверены, что хотите удалить пользователя —{" "}
            <Typography.Text type="danger">{user.fullName}</Typography.Text>
          </Typography.Text>
        }
        title="Удалить пользователя"
      />
      <Button
        danger
        disabled={disabled}
        icon={<DeleteOutlined />}
        size="small"
        type="link"
        onClick={withConfirmation(deleteUserFn)}
      />
    </>
  );
});
