import { PortalModulesOpenApi, TariffsOpenApi } from "api";
import { pipe } from "ramda";
import { Service } from "typedi";

import { encodePagination, encodeSorting, tableDecoder } from "shared/api";
import { applyDecoder } from "shared/lib/applyDecoder";
import type { TableDto } from "shared/model/interfaces";

import type {
  CreateTariffRequest,
  GetTariffDetailsRequest,
  GetTariffsRequest,
  MoveTariffToArchiveRequest,
  PortalModule,
  TariffDetails,
  TariffListItem,
  UpdateTariffRequest,
} from "../interfaces";

import { portalModulesListDecoder, tariffDetailsDecoder, tariffListItemDecoder } from "./decoders";

@Service()
export class TariffsApi {
  public async getTariffDetails({ urlParams }: GetTariffDetailsRequest): Promise<TariffDetails> {
    return TariffsOpenApi.tariffDetailInfo(urlParams).then(applyDecoder(tariffDetailsDecoder));
  }

  public async getTariffs({ additionalQueryParams }: GetTariffsRequest): Promise<TableDto<TariffListItem>> {
    return TariffsOpenApi.tariffList(pipe(encodeSorting, encodePagination)(additionalQueryParams)).then(
      applyDecoder(tableDecoder(tariffListItemDecoder)),
    );
  }

  public async createTariff({ body }: CreateTariffRequest): Promise<TariffDetails> {
    return TariffsOpenApi.createTariff({ requestBody: body }).then(applyDecoder(tariffDetailsDecoder));
  }

  public async updateTariff({ urlParams, body }: UpdateTariffRequest): Promise<TariffDetails> {
    return TariffsOpenApi.updateTariff({ ...urlParams, requestBody: body }).then(applyDecoder(tariffDetailsDecoder));
  }

  public async moveTariffToArchive({ urlParams }: MoveTariffToArchiveRequest): Promise<TariffDetails> {
    return TariffsOpenApi.moveTariffToArchive(urlParams);
  }
}

@Service()
export class PortalModulesApi {
  public async getPortalModules(): Promise<PortalModule[]> {
    return PortalModulesOpenApi.portalModulesList().then(applyDecoder(portalModulesListDecoder));
  }
}
