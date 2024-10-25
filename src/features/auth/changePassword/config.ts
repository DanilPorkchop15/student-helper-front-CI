import type { ChangePasswordDto } from "entities/auth";

import type { ValidationRules } from "shared/lib/types";

export const validationRules: ValidationRules<Pick<ChangePasswordDto, "password" | "passwordConfirmation">> = {
  password: [{ required: true, message: "Пожалуйста, введите новый пароль" }],
  passwordConfirmation: [
    { required: true, message: "Пожалуйста, подтвердите новый пароль" },
    ({ getFieldValue }) => ({
      async validator(_, value: string) {
        if (!value || getFieldValue("password") === value) return Promise.resolve();
        return Promise.reject(new Error("Введенные вами пароли не совпадают!"));
      },
    }),
  ],
};
