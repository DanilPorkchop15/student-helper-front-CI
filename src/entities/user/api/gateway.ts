import { OpenAPI, UsersOpenApi } from "api";
import { Inject, Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";
import { CookiesStore } from "shared/model/services";

import type {
  User,
} from "../interfaces";

import { userDecoder } from "./decoders";

@Service()
export class UsersApi {

  @Inject()
  private readonly _cookiesStore!: CookiesStore;
  public async getUserDetails(): Promise<User> {
    OpenAPI.TOKEN = this._cookiesStore.get("token")
    return UsersOpenApi.userInfo().then(applyDecoder(userDecoder));
  }
}
