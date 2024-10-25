export class AppRoutes {
  public static getHomeUrl = () => "/";

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

  public static getTariffsUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}tariffs`;

  public static getTariffDetailsUrl = (withPrefix: boolean = false, id?: number) => {
    return `${this._calculatePrefix(this.getTariffsUrl(), withPrefix)}${id ?? ":id"}`;
  };

  public static getCreateTariffUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getTariffsUrl(), withPrefix)}create`;

  public static getCustomersUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}customers`;

  public static getCustomerInfoUrl = (withPrefix: boolean = false, id?: number) => {
    return `${this._calculatePrefix(this.getCustomersUrl(), withPrefix)}${id ?? ":id"}`;
  };

  public static getCreateCustomerUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getCustomersUrl(), withPrefix)}create`;

  public static getAccountsUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}accounts`;

  public static getSettingsUrl = (withPrefix: boolean = false) =>
    `${this._calculatePrefix(this.getHomeUrl(), withPrefix)}settings`;

  private static readonly _calculatePrefix = (prefix: string, withPrefix: boolean) =>
    withPrefix ? prefix + "/" : prefix;
}
