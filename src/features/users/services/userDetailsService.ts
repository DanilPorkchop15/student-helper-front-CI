import { Container, Inject, Service } from "typedi";

import { AuthApi, type ChangePasswordDto } from "entities/auth";
import { UserDetailsModel, UsersApi } from "entities/user";

@Service()
export class UserDetailsService {
  @Inject()
  private readonly _usersApi!: UsersApi;

  @Inject()
  private readonly _authApi!: AuthApi;

  public async changePassword(body: ChangePasswordDto): Promise<void> {
    await this._authApi.changePasswordRequest({ body });
  }

  public async removeAvatar(userDetailsModel: UserDetailsModel): Promise<void> {
    const photo = userDetailsModel.snapshot().photo;

    if (!photo) throw new Error("UserProfile photo is null");

    userDetailsModel.set("photo", null);
  }

  //   public async updateAvatar(userProfileModel: UserProfileModel, newAvatar: File): Promise<void> {
  //     const userProfile = userProfileModel.snapshot();

  //     // TODO send file to server
  //     const newPhoto = "";

  //     userProfileModel.set("photo", newPhoto);

  //     // TODO send new photo
  //     await this._usersApi.updateUser({
  //       urlParams: { id: userProfile.id },
  //     });

  //     if (userProfile.photo) {
  //       // TODO remove old photo from server
  //     }
  //   }
}

export const userService = Container.get(UserDetailsService);
