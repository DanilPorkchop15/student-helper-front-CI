import type { Request } from "shared/model/interfaces";

import type { ChangePasswordDto, CheckResetCodeDto, LoginDto, ResetPasswordDto } from "./dto.request";

export type LoginRequest = Request<{ body: LoginDto }>;
export type ChangePasswordRequest = Request<{ body: ChangePasswordDto }>;
export type ResetPasswordRequest = Request<{ body: ResetPasswordDto }>;
export type CheckResetCodeRequest = Request<{ additionalQueryParams: CheckResetCodeDto }>;
