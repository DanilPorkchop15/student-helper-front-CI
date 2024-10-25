import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { AppRoutes } from "shared/model/services";
import { useConfirmationModal } from "shared/ui/confirmationModal";

import { authService } from "../service";

export const LogoutFeature = React.memo(function LogoutButton() {
  const navigate = useNavigate();
  const [withConfirmation, ConfirmationDialog] = useConfirmationModal();

  const logout = useCallback(() => {
    authService.logout();
    navigate(AppRoutes.getAuthUrl());
  }, [authService]);

  return (
    <>
      <ConfirmationDialog cancelText="Отменить" okText="Выйти" subtitle="Вы уверены, что хотите выйти?" title="Выйти" />
      <Button
        color="default"
        icon={<LogoutOutlined style={{ fontSize: 24 }} />}
        shape="circle"
        size="large"
        variant="text"
        onClick={withConfirmation(logout)}
      />
    </>
  );
});
