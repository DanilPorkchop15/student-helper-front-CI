import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAsync, useAsyncFn } from "react-use";
import { Button, Form, Input, theme, Typography } from "antd";

import type { ChangePasswordDto } from "entities/auth";

import { AppRoutes } from "shared/model/services";
import PageSpin from "shared/ui/pageSpin";

import { authService } from "../service";

import { validationRules } from "./config";

export const ChangePasswordFeature = React.memo(function ChangePasswordForm() {
  const [searchParams] = useSearchParams();
  const resetCode = searchParams.get("code") ?? "";
  const [changePasswordForm] = Form.useForm();

  const { token } = theme.useToken();
  const navigate = useNavigate();

  const { loading: checkLoading, value: isCodeValid } = useAsync(async () => {
    if (!resetCode) return false;
    return authService.checkResetCode(resetCode);
  }, []);

  const [{ error, loading }, submitForm] = useAsyncFn(
    async (body: Omit<ChangePasswordDto, "code">) => {
      if (!isCodeValid) return;
      await authService.changePassword({ ...body, code: resetCode });
      navigate(AppRoutes.getAuthUrl());
    },
    [isCodeValid],
  );

  if (checkLoading) return <PageSpin />;

  return (
    <div>
      {isCodeValid ? (
        <>
          <Typography.Title level={4}>Придумайте новый пароль</Typography.Title>
          <Form
            autoComplete="off"
            form={changePasswordForm}
            name="basic"
            size="large"
            style={{ marginTop: token.marginXL }}
            onFinish={submitForm}
          >
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
              <Typography.Text style={{ color: token.colorErrorText, marginBottom: token.marginXS }}>
                {error.message}
              </Typography.Text>
            )}

            <Button block htmlType="submit" loading={loading} style={{ marginBottom: token.marginXS }} type="primary">
              Сохранить
            </Button>
          </Form>
        </>
      ) : (
        <Typography.Title level={4}>Ссылка смены пароля некорректна</Typography.Title>
      )}
    </div>
  );
});
