import { Container, Inject, Service } from "typedi";

import { type CreateUserDto, type UpdateUserDto, UserAction, type UserDetails, UsersApi } from "entities/user";

@Service()
export class UsersService {
  @Inject()
  private readonly _api!: UsersApi;

  public async getUserDetails(id: Guid): Promise<UserDetails> {
    return this._api.getUserDetails({ urlParams: { id } });
  }

  public async createUser(body: CreateUserDto): Promise<void> {
    await this._api.createUser({ body });
  }

  // TODO refactoring to applyAction
  public async deleteUser(id: Guid): Promise<void> {
    await this._api.userAction({ urlParams: { id }, body: { action: UserAction.BLOCK } });
  }

  // TODO send body
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async updateUser(id: Guid, body: UpdateUserDto): Promise<void> {
    await this._api.updateUser({ urlParams: { id } });
  }
}

export const usersService = Container.get(UsersService);
