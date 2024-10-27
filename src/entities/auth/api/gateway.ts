import { StudentHelperWebOpenApi } from "api";
import { Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";

import type { AuthenticationTokens, LoginRequest, RegisterRequest } from "../interfaces";

import { authenticationTokensDecoder } from "./decoders";

@Service()
export class AuthApi {

  public async loginRequest({ body }: LoginRequest): Promise<AuthenticationTokens> {
    return StudentHelperWebOpenApi.postAuthLogin({
      useCookies: false,
      useSessionCookies: false,
      requestBody: body,
    }).then(applyDecoder(authenticationTokensDecoder));
  }
  public async registerRequest({ body }: RegisterRequest): Promise<void> {
    await StudentHelperWebOpenApi.postAuthRegister({ requestBody: body });
  }
}
