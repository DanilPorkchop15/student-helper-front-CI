import type { Sorting } from "shared/model/interfaces";

export type UsersSortingKeys = "shortName" | "contractDate";

export type UsersSorting = Sorting<UsersSortingKeys>;
