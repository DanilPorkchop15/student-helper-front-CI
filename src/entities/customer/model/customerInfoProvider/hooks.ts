import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { CustomerInfo } from "../../interfaces";

import { CustomerInfoService } from "./service";

export function useCustomerInfo(): CustomerInfo {
  const customerInfo = useInjectService(CustomerInfoService).customerInfo;

  if (isNil(customerInfo)) throw new Error("CustomerInfo not found");

  return customerInfo;
}
