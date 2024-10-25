import { Inject } from "typedi";

import { FilterParams, PaginationParams, SortingParams } from "shared/model/additionalRequestParams";
import type { Pagination, TableDto } from "shared/model/interfaces";
import { TableModule } from "shared/model/tableModule";

import { UsersApi } from "../../api";
import type { UserListItem, UsersFilter, UsersSorting, UsersSortingKeys } from "../../interfaces";

export class UsersTableModule extends TableModule<UserListItem, UsersFilter, UsersSortingKeys> {
  public readonly filter: FilterParams<UsersFilter> = new FilterParams<UsersFilter>({});

  public readonly sorting: SortingParams<UsersSortingKeys> = new SortingParams<UsersSortingKeys>();

  public readonly pagination: PaginationParams = new PaginationParams({ pageIndex: 1, pageSize: 10 });

  @Inject() private readonly _api!: UsersApi;

  constructor() {
    super();
    this.sorting.set("orderBy", "shortName");
  }

  protected async _getData(
    additionalQueryParams: Pagination & UsersFilter & UsersSorting,
  ): Promise<TableDto<UserListItem>> {
    return this._api.getUsers({ additionalQueryParams });
  }
}
