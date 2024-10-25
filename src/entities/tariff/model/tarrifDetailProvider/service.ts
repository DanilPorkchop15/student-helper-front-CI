import { Inject, Service } from "typedi";

import { TariffsApi } from "../../api";
import type { GetTariffDetailsRequest, TariffDetails } from "../../interfaces";

@Service()
export class TariffDetailsService {
  private _tariffDetailsModel: TariffDetails | null = null;

  @Inject()
  private readonly _api!: TariffsApi;

  public get tariffDetails(): TariffDetails | null {
    return this._tariffDetailsModel;
  }

  public async loadTariffDetails({ urlParams }: GetTariffDetailsRequest): Promise<void> {
    this._tariffDetailsModel = await this._api.getTariffDetails({ urlParams });
  }
}
