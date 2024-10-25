import { Inject, Service } from "typedi";

import { FilterParams, PaginationParams, SortingParams } from "shared/model/additionalRequestParams";
import type { Pagination, TableDto } from "shared/model/interfaces";
import { TableModule } from "shared/model/tableModule";

import { TariffsApi } from "../../api";
import type { TariffListItem, TariffsFilter, TariffsSorting, TariffsSortingKeys } from "../../interfaces";

@Service()
export class TariffsTableModule extends TableModule<TariffListItem, TariffsFilter, TariffsSortingKeys> {
  public readonly filter: FilterParams<TariffsFilter> = new FilterParams<TariffsFilter>({});

  public readonly sorting: SortingParams<TariffsSortingKeys> = new SortingParams<TariffsSortingKeys>();

  public readonly pagination: PaginationParams = new PaginationParams({ pageIndex: 1, pageSize: 10 });

  @Inject()
  private readonly _api!: TariffsApi;

  constructor() {
    super();
    this.sorting.set("orderBy", "createdAt");
  }

  protected async _getData(
    additionalQueryParams: Pagination & TariffsFilter & TariffsSorting,
  ): Promise<TableDto<TariffListItem>> {
    return this._api.getTariffs({ additionalQueryParams });
  }
}
