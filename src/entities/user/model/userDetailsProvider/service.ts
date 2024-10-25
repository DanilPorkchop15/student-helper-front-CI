import { Inject, Service } from "typedi";

import { UsersApi } from "../../api";

import { UserDetailsModel } from "./model";

@Service()
export class UserDetailsService {
  private _userDetailsModel: UserDetailsModel | null = null;

  @Inject()
  private readonly _api!: UsersApi;

  public get userDetails(): UserDetailsModel | null {
    return this._userDetailsModel;
  }

  public async loadUserDetails(id: Guid): Promise<void> {
    const profile = await this._api.getUserDetails({ urlParams: { id: id } });
    this._userDetailsModel = new UserDetailsModel(profile);
  }

  public logout(): void {
    this._userDetailsModel = null;
  }
}
