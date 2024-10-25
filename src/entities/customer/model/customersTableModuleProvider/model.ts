import { Inject, Service } from "typedi";

import { FilterParams, PaginationParams, SortingParams } from "shared/model/additionalRequestParams";
import type { Pagination, TableDto } from "shared/model/interfaces";
import { TableModule } from "shared/model/tableModule";

import { CustomerApi } from "../../api";
import type { CustomerListItem, CustomersFilter, CustomersSorting, CustomersSortingKeys } from "../../interfaces";

@Service()
export class CustomersTableModule extends TableModule<CustomerListItem, CustomersFilter, CustomersSortingKeys> {
  public readonly filter: FilterParams<CustomersFilter> = new FilterParams<CustomersFilter>({});

  public readonly sorting: SortingParams<CustomersSortingKeys> = new SortingParams<CustomersSortingKeys>();

  public readonly pagination: PaginationParams = new PaginationParams({ pageIndex: 1, pageSize: 10 });

  @Inject()
  private readonly _api!: CustomerApi;

  constructor() {
    super();
    this.sorting.set("orderBy", "contractDate");
  }

  protected async _getData(
    additionalQueryParams: Pagination & CustomersFilter & CustomersSorting,
  ): Promise<TableDto<CustomerListItem>> {
    return this._api.getCustomers({ additionalQueryParams });
  }
}
