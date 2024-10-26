export class AppRoutes {
  public static getHomeUrl = () => "/";


  public static getProfileUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}profile`;

  public static getUsersUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}users`;

  public static getCreateUserUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getUsersUrl(), withPrefix)}create`;

  public static getUpdateUserUrl = (withPrefix: boolean = false, id?: number) =>
    `${this._calculatePrefix(this.getUsersUrl(), withPrefix)}${id ?? ":id"}/update`;

  public static getAuthUrl = () => "/auth";

  public static getResetPasswordUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getAuthUrl(), withPrefix)}reset-password`;

  public static getResetPasswordSuccessUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getAuthUrl(), withPrefix)}reset-password-success`;

  public static getChangePasswordUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getAuthUrl(), withPrefix)}change-password`;

  public static getUniversityDetailsUrl = (withPrefix: boolean = false, uId?: number) => {
    return `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}university/${uId ?? ":universityId"}`;
  };

  public static getBranchDetailsUrl = (withPrefix: boolean = false, { universityId, branchId }: { universityId?: number, branchId?: number } = {}) => {
    return `${this._calculatePrefix(this.getUniversityDetailsUrl(true, universityId), withPrefix)}branch/${branchId ?? ":branchId"}`;
  };

  public static getThemeDetailsUrl = (withPrefix: boolean = false, { universityId, branchId, themeId }: { universityId?: number, branchId?: number, themeId?: number } = {}) => {
    return `${this._calculatePrefix(this.getBranchDetailsUrl(true, { universityId, branchId }), withPrefix)}theme/${themeId ?? ":themeId"}`;
  };

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
