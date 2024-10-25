import type { Pagination, Request } from "shared/model/interfaces";

import type { CreateCustomerDto, UpdateCustomerDto } from "./dto.request";
import type { CustomersFilter } from "./filter";
import type { CustomersSorting } from "./sorting";

export type GetCustomersRequest = Request<{ additionalQueryParams: Pagination & CustomersFilter & CustomersSorting }>;
export type GetCustomerInfoRequest = Request<{ urlParams: { id: Guid } }>;
export type CreateCustomerRequest = Request<{ body: CreateCustomerDto }>;
export type UpdateCustomerRequest = Request<{ urlParams: { id: Guid }; body: UpdateCustomerDto }>;
export type DeleteCustomerRequest = Request<{ urlParams: { id: Guid } }>;
