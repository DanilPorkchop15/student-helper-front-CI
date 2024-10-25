import type { ResetPasswordDto } from "entities/auth";

import type { ValidationRules } from "shared/lib/types";

export const validationRules: ValidationRules<ResetPasswordDto> = {
  email: [
    {
      type: "email",
      message: "Ввод не является действительным E-mail!",
    },
    { required: true, message: "Пожалуйста, введите ваш e-mail" },
  ],
};
