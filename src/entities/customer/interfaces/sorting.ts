import type { Sorting } from "shared/model/interfaces";

export type CustomersSortingKeys = "shortName" | "contractDate";

export type CustomersSorting = Sorting<CustomersSortingKeys>;
