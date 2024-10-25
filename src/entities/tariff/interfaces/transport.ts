import type { Pagination, Request } from "shared/model/interfaces";

import type { CreateTariffDto, UpdateTariffDto } from "./dto.request";
import type { TariffsFilter } from "./filter";
import type { TariffsSorting } from "./sorting";

export type GetTariffsRequest = Request<{ additionalQueryParams: Pagination & TariffsFilter & TariffsSorting }>;
export type GetTariffDetailsRequest = Request<{ urlParams: { id: Guid } }>;
export type CreateTariffRequest = Request<{ body: CreateTariffDto }>;
export type UpdateTariffRequest = Request<{ urlParams: { id: Guid }; body: UpdateTariffDto }>;
export type MoveTariffToArchiveRequest = Request<{ urlParams: { id: Guid } }>;
