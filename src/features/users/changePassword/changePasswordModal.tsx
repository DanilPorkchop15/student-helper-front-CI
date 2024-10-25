import React from "react";
import { useAsyncFn } from "react-use";
import { Button, Form, Input, theme, Typography } from "antd";

import type { ChangePasswordDto } from "entities/auth";

import { antdServices } from "shared/model/services";
import { CreationModal } from "shared/ui/creationModal";

import { userService } from "../services";

import { validationRules } from "./config";

interface ChangePasswordModalProps {
  closeModal: () => void;
}

export const ChangePasswordModal = React.memo(function ChangePasswordModal({ closeModal }: ChangePasswordModalProps) {
  const [changePasswordForm] = Form.useForm();
  const { token } = theme.useToken();

  const [{ error, loading }, submitForm] = useAsyncFn(async (body: ChangePasswordDto) => {
    await userService.changePassword(body);
    closeModal();
    antdServices.notification.success({ message: "Пароль изменен" });
  }, []);

  return (
    <CreationModal title="Сменить пароль" onCancel={closeModal}>
      <Form
        autoComplete="off"
        form={changePasswordForm}
        name="basic"
        size="large"
        style={{ marginTop: token.marginXL }}
        onFinish={submitForm}
      >
        <Form.Item name="currentPassword" rules={validationRules.currentPassword}>
          <Input.Password placeholder="Старый пароль" status={error && "error"} />
        </Form.Item>
        <Form.Item name="password" rules={validationRules.password}>
          <Input.Password
            placeholder="Новый пароль"
            status={error && "error"}
            onChange={() => {
              void changePasswordForm.validateFields();
            }}
          />
        </Form.Item>
        <Form.Item
          name="passwordConfirmation"
          rules={validationRules.passwordConfirmation}
          style={{ marginBottom: error ? token.marginXS : token.marginLG }}
        >
          <Input.Password
            placeholder="Подтвердите пароль"
            status={error && "error"}
            onChange={() => {
              void changePasswordForm.validateFields();
            }}
          />
        </Form.Item>

        {error?.message && (
          <Typography.Text
            style={{
              color: token.colorErrorText,
              marginBottom: token.marginXS,
            }}
          >
            {error.message}
          </Typography.Text>
        )}

        <Button block htmlType="submit" loading={loading} style={{ marginBottom: token.marginXS }} type="primary">
          Сохранить
        </Button>
      </Form>
    </CreationModal>
  );
});
