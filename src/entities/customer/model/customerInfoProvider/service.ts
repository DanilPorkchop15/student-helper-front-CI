import { Inject, Service } from "typedi";

import { CustomerApi } from "../../api";
import type { CustomerInfo, GetCustomerInfoRequest } from "../../interfaces";

@Service()
export class CustomerInfoService {
  private _customerInfo: CustomerInfo | null = null;

  @Inject()
  private readonly _api!: CustomerApi;

  public get customerInfo(): CustomerInfo | null {
    return this._customerInfo;
  }

  public async loadCustomerInfo({ urlParams }: GetCustomerInfoRequest): Promise<void> {
    this._customerInfo = await this._api.getCustomerInfo({ urlParams });
  }
}
