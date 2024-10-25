import { string1 } from "@worksolutions/utils";
import { isNil, memoizeWith, path, pipe, prop, toUpper } from "ramda";

import { BASE_API_HOST } from "shared/config/const";

import type { User, UserDetails } from "./interfaces";

export const getUserInitials: (user: User) => string = memoizeWith(prop("fullName"), (user) => {
  const [lastName = "", firstName = ""] = user.fullName.split(" ");
  return toUpper(lastName + firstName);
});

export const getUserAvatarFullPath: (user: UserDetails) => string | undefined = memoizeWith(
  pipe(path(["photo"]), string1),
  (user) => (isNil(user.photo) ? undefined : BASE_API_HOST + user.photo),
);
