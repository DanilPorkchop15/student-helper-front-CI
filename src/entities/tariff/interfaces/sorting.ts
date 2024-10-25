import type { Sorting } from "shared/model/interfaces";

export type TariffsSortingKeys = "title" | "createdAt" | "updatedAt";

export type TariffsSorting = Sorting<TariffsSortingKeys>;
