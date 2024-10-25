import type { UserAction } from "./domain";

export interface ImageRef {
  guid?: string;
  mimetype?: string;
  path?: string;
}

export interface CreateUserDto {
  name: string;
  surname: string;
  email: string;
  photo?: ImageRef;
}

export interface UserActionDto {
  action: UserAction;
}

export interface UpdateUserDto {}
