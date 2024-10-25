import type { UniqueEntity } from "shared/model/interfaces";

export interface User {
  surname: string;
  name: string;
  email: string;
  fullName: string;
}

export interface UserListItem extends User, UniqueEntity {
  blocked: boolean;
  action: UserAction;
  photo: string | null;
}

export interface UserDetails extends User, UniqueEntity {
  photo: string | null;
}




export enum UserAction {
  BLOCK = "block",
  UNBLOCK = "unblock",
}

