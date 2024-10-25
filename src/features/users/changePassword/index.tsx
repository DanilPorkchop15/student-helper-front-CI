import React from "react";
import { useToggle } from "react-use";
import { Button, theme } from "antd";

import { ChangePasswordModal } from "./changePasswordModal";

export const ChangePasswordFeature = React.memo(function ChangePasswordFeature() {
  const { token } = theme.useToken();

  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <>
      <Button style={{ width: "min-content", marginTop: token.marginXS }} type="primary" onClick={toggleIsOpen}>
        Сменить пароль
      </Button>
      {isOpen && <ChangePasswordModal closeModal={toggleIsOpen} />}
    </>
  );
});
