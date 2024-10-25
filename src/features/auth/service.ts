import { Container, Inject, Service } from "typedi";

import { AuthApi, type ChangePasswordDto, type LoginDto, type ResetPasswordDto } from "entities/auth";
import { UserDetailsService } from "entities/user";

import { CookiesStore, cookiesStore } from "shared/model/services";

@Service()
export class AuthService {
  @Inject()
  private readonly _api!: AuthApi;

  @Inject()
  private readonly _userDetailsService!: UserDetailsService;

  @Inject()
  private readonly _cookiesStore!: CookiesStore;

  public async login(body: LoginDto): Promise<void> {
    const token = await this._api.loginRequest({ body });
    this._cookiesStore.set("token", `Bearer ${token.accessToken}`, { secure: true, expires: 365 });
  }

  public async changePassword(body: ChangePasswordDto): Promise<void> {
    await this._api.changePasswordRequest({ body });
  }

  public async checkResetCode(code: string): Promise<boolean> {
    return this._api.checkResetCodeRequest({ additionalQueryParams: { code } });
  }

  public async resetPassword(body: ResetPasswordDto): Promise<void> {
    await this._api.resetPasswordRequest({ body });
  }

  public logout(): void {
    cookiesStore.remove("token");
    this._userDetailsService.logout();
  }
}

export const authService = Container.get(AuthService);
