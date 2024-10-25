import type { Pagination, Request } from "shared/model/interfaces";

import type { UsersFilter } from "./filter";
import type { CreateUserDto, UserActionDto } from "./request.dto";
import type { UsersSorting } from "./sorting";

export type GetUsersRequest = Request<{ additionalQueryParams: Pagination & UsersFilter & UsersSorting }>;
export type GetUserDetailsRequest = Request<{ urlParams: { id: Guid } }>;
export type CreateUserRequest = Request<{ body: CreateUserDto }>;
export type UpdateUserRequest = Request<{ urlParams: { id: Guid } }>;
export type UserActionRequest = Request<{ urlParams: { id: Guid }; body: UserActionDto }>;
