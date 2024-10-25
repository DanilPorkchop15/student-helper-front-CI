import { ClientsOpenApi } from "api";
import { pipe } from "ramda";
import { Service } from "typedi";

import { encodePagination, encodeSorting } from "shared/api";
import { tableDecoder } from "shared/api/decoders";
import { applyDecoder } from "shared/lib/applyDecoder";
import type { TableDto } from "shared/model/interfaces";

import type {
  CreateCustomerRequest,
  CustomerInfo,
  CustomerListItem,
  DeleteCustomerRequest,
  GetCustomerInfoRequest,
  GetCustomersRequest,
  UpdateCustomerRequest,
} from "../interfaces";

import { customerInfoDecoder, customerListItemDecoder } from "./decoders";

@Service()
export class CustomerApi {
  public async getCustomerInfo({ urlParams }: GetCustomerInfoRequest): Promise<CustomerInfo> {
    return ClientsOpenApi.customerInfo(urlParams).then(applyDecoder(customerInfoDecoder));
  }

  public async getCustomers({ additionalQueryParams }: GetCustomersRequest): Promise<TableDto<CustomerListItem>> {
    return ClientsOpenApi.customerList(pipe(encodeSorting, encodePagination)(additionalQueryParams)).then(
      applyDecoder(tableDecoder(customerListItemDecoder)),
    );
  }

  public async createCustomer({ body }: CreateCustomerRequest): Promise<CustomerInfo> {
    return ClientsOpenApi.createCustomer({ requestBody: body }).then(applyDecoder(customerInfoDecoder));
  }

  public async updateCustomer({ urlParams, body }: UpdateCustomerRequest): Promise<CustomerInfo> {
    return ClientsOpenApi.updateCustomer({ ...urlParams, requestBody: body }).then(applyDecoder(customerInfoDecoder));
  }

  public async deleteCustomer({ urlParams }: DeleteCustomerRequest): Promise<void> {
    return ClientsOpenApi.deleteCustomer(urlParams);
  }
}
