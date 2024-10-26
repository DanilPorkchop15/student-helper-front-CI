import type { Request } from "shared/model/interfaces";

import type { CreateUserDto, UserActionDto } from "./request.dto";

export type GetUserDetailsRequest = Request<{ urlParams: { id: Guid } }>;
export type CreateUserRequest = Request<{ body: CreateUserDto }>;
export type UpdateUserRequest = Request<{ urlParams: { id: Guid } }>;
export type UserActionRequest = Request<{ urlParams: { id: Guid }; body: UserActionDto }>;
