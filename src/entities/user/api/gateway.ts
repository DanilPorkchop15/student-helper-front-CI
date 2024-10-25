import { UsersOpenApi } from "api";
import { pipe } from "ramda";
import { Service } from "typedi";

import { encodePagination, encodeSorting, tableDecoder } from "shared/api";
import { applyDecoder } from "shared/lib/applyDecoder";
import type { TableDto } from "shared/model/interfaces";

import type {
  CreateUserRequest,
  GetUserDetailsRequest,
  GetUsersRequest,
  UpdateUserRequest,
  UserActionRequest,
  UserDetails,
  UserListItem,
} from "../interfaces";

import { userDetailsDecoder, userListItemDecoder } from "./decoders";

@Service()
export class UsersApi {
  public async getUsers({ additionalQueryParams }: GetUsersRequest): Promise<TableDto<UserListItem>> {
    return UsersOpenApi.userList(pipe(encodeSorting, encodePagination)(additionalQueryParams)).then(
      applyDecoder(tableDecoder(userListItemDecoder)),
    );
  }

  public async getUserDetails({ urlParams }: GetUserDetailsRequest): Promise<UserDetails> {
    return UsersOpenApi.userInfo(urlParams).then(applyDecoder(userDetailsDecoder));
  }

  public async createUser({ body }: CreateUserRequest): Promise<UserDetails> {
    return UsersOpenApi.createUser({ requestBody: body }).then(applyDecoder(userDetailsDecoder));
  }

  public async updateUser({ urlParams }: UpdateUserRequest): Promise<UserDetails> {
    return UsersOpenApi.updateUser(urlParams).then(applyDecoder(userDetailsDecoder));
  }

  public async userAction({ urlParams, body }: UserActionRequest): Promise<void> {
    await UsersOpenApi.userAction({ ...urlParams, ...body });
  }
}
