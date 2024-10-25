import Decoder, { boolean, field, number, string, succeed } from "jsonous";

import { userDecoder } from "entities/user/@x";

import { fieldOrFallback } from "shared/api";

import type { BaseCustomer, CustomerInfo, CustomerListItem } from "../interfaces";

const customerAdministratorDecoder: Decoder<CustomerInfo["administrator"]> = userDecoder.assign(
  "phone",
  fieldOrFallback("phone", string),
);

const baseCustomerDecoder: Decoder<BaseCustomer> = succeed({})
  .assign("isActive", field("isActive", boolean))
  .assign("id", field("id", number))
  .assign("shortName", field("shortName", string))
  .assign(
    "contract",
    fieldOrFallback(
      "contract",
      succeed({}).assign("number", fieldOrFallback("number", string)).assign("date", fieldOrFallback("date", string)),
    ),
  );

export const customerListItemDecoder: Decoder<CustomerListItem> = baseCustomerDecoder
  .assign("inn", fieldOrFallback("inn", number))
  .map((customer) => ({
    ...customer,
    contractDate: customer.contract?.date ?? null,
    contractNumber: customer.contract?.number ?? null,
  }));

export const customerInfoDecoder: Decoder<CustomerInfo> = baseCustomerDecoder
  .assign("fullName", fieldOrFallback("fullName", string))
  .assign(
    "director",
    fieldOrFallback(
      "director",
      succeed({})
        .assign("post", fieldOrFallback("post", string))
        .assign("fullName", fieldOrFallback("fullName", string)),
    ),
  )
  .assign(
    "contactsData",
    field(
      "contactsData",
      succeed({})
        .assign("notificationEmail", field("notificationEmail", string))
        .assign("address", fieldOrFallback("address", string))
        .assign("phone", fieldOrFallback("phone", string)),
    ),
  )
  .assign(
    "companyDetails",
    fieldOrFallback(
      "companyDetails",
      succeed({})
        .assign("inn", fieldOrFallback("inn", number))
        .assign("kpp", fieldOrFallback("kpp", number))
        .assign("ogrn", fieldOrFallback("ogrn", number))
        .assign("currentAccount", fieldOrFallback("currentAccount", number))
        .assign("correspondentAccount", fieldOrFallback("correspondentAccount", number))
        .assign("bankName", fieldOrFallback("bankName", string))
        .assign("bik", fieldOrFallback("bik", number)),
    ),
  )
  .assign("administrator", field("administrator", customerAdministratorDecoder));
