import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAsyncFn } from "react-use";
import { Button, Form, Input, theme, Typography } from "antd";

import type { LoginDto } from "entities/auth";

import { AppRoutes } from "shared/model/services";

import { authService } from "../service";

import { validationRules } from "./config";

export const LoginFeature = React.memo(function LoginForm() {
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const [{ error, loading }, submitForm] = useAsyncFn(async (body: LoginDto) => {
    await authService.login(body);
    navigate(AppRoutes.getHomeUrl());
  });

  return (
    <div>
      <Typography.Title level={3}>Work Solutions</Typography.Title>
      <Typography.Text>WS-LMS образовательная система</Typography.Text>
      <Form autoComplete="off" name="basic" size="large" style={{ marginTop: token.marginXL }} onFinish={submitForm}>
        <Form.Item name="identifier" rules={validationRules.login}>
          <Input placeholder="E-mail" status={error && "error"} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={validationRules.password}
          style={{ marginBottom: error ? token.marginXS : token.marginLG }}
        >
          <Input.Password placeholder="Пароль" status={error && "error"} />
        </Form.Item>

        {error?.message && (
          <Typography.Text style={{ color: token.colorErrorText, marginBottom: token.marginXS }}>
            {error.message}
          </Typography.Text>
        )}

        <Button block htmlType="submit" loading={loading} style={{ marginBottom: token.marginXS }} type="primary">
          Войти
        </Button>
        <div>
          <Link to={AppRoutes.getResetPasswordUrl(true)}>Забыли пароль?</Link>
        </div>
      </Form>
    </div>
  );
});
