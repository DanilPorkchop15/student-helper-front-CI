import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAsyncFn } from "react-use";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Form, Input, theme, Typography } from "antd";

import type { ResetPasswordDto } from "entities/auth";

import { AppRoutes } from "shared/model/services";

import { authService } from "../service";

import { validationRules } from "./config";

export const ResetPasswordFeature = React.memo(function ResetPasswordForm() {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const [{ error, loading }, submitForm] = useAsyncFn(async (body: ResetPasswordDto) => {
    await authService.resetPassword(body);
    navigate(AppRoutes.getResetPasswordSuccessUrl(true));
  });

  return (
    <div>
      <Link style={{ marginBottom: token.marginXL }} to={AppRoutes.getAuthUrl()}>
        <ArrowLeftOutlined style={{ marginRight: token.marginXS }} />
        Назад
      </Link>
      <Typography.Title level={4} style={{ marginBottom: token.marginXS }}>
        Восстановление пароля
      </Typography.Title>
      <Typography.Text style={{ color: token.colorTextDescription }}>
        Введите адрес электронной почты, привязанный к аккаунту, и мы отправим вам ссылку для восстановления пароля.
      </Typography.Text>
      <Form autoComplete="off" name="basic" size="large" style={{ marginTop: token.marginXL }} onFinish={submitForm}>
        <Form.Item
          name="email"
          rules={validationRules.email}
          status={error && "error"}
          style={{ marginBottom: error ? token.marginXS : token.marginLG }}
        >
          <Input placeholder="Электронная почта" />
        </Form.Item>

        {error?.message && (
          <Typography.Text style={{ color: token.colorErrorText, marginBottom: token.marginXS }}>
            {error.message}
          </Typography.Text>
        )}

        <Button block htmlType="submit" loading={loading} style={{ marginBottom: token.marginXS }} type="primary">
          Отправить
        </Button>
      </Form>
    </div>
  );
});
