import Decoder, { boolean, field, number, string, succeed } from "jsonous";
import { assoc } from "ramda";

import { enumDecoder, fieldOrFallback } from "shared/api";

import { type User, UserAction, UserDetails, type UserListItem } from "../interfaces";

export const userDecoder: Decoder<User> = succeed({})
  .assign("name", field("name", string))
  .assign("surname", field("surname", string))
  .assign("email", field("email", string))
  .map((user) => ({
    ...user,
    fullName: user.name + " " + user.surname,
  }));


export const userListItemDecoder: Decoder<UserListItem> = userDecoder
  .assign("id", field("id", number))
  .assign("photo", fieldOrFallback("photo", string))
  .assign("blocked", field("active", boolean))
  .assign("action", field("action", enumDecoder(UserAction)));

export const userDetailsDecoder: Decoder<UserDetails> = succeed({})
  .assign("id", field("id", number))
  .assign("id", field("id", number))
  .assign("name", field("name", string))
  .assign("surname", field("surname", string))
  .assign("email", field("email", string))
  .assign("photo", fieldOrFallback("photo", string))
  .map((user) => assoc("fullName", user.surname + user.name, user));
