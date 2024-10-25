import { AuthenticationOpenApi } from "api";
import { Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";

import type {
  AuthenticationTokens,
  ChangePasswordRequest,
  CheckResetCodeRequest,
  LoginRequest,
  ResetPasswordRequest,
} from "../interfaces";

import { authenticationTokensDecoder } from "./decoders";

@Service()
export class AuthApi {
  public async loginRequest({ body }: LoginRequest): Promise<AuthenticationTokens> {
    return AuthenticationOpenApi.authentication({ requestBody: body }).then(applyDecoder(authenticationTokensDecoder));
  }

  public async checkResetCodeRequest(request: CheckResetCodeRequest): Promise<boolean> {
    return Promise.reject("заглушка");
  }

  public async changePasswordRequest(request: ChangePasswordRequest): Promise<void> {
    return Promise.reject("заглушка");
  }

  public async resetPasswordRequest(request: ResetPasswordRequest): Promise<void> {
    return Promise.reject("заглушка");
  }
}
