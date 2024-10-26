export class AppTitles {
  public static getHomeTitle = () => "Главная";

  public static getUsersTitle = () => "Пользователи";
  public static getAuthTitle = () => "Авторизация";
  public static getResetPasswordTitle = () => "Восстановление пароля";
  public static getResetPasswordSuccessTitle = () => "Восстановление пароля";
  public static getChangePasswordTitle = () => "Новый пароль";
  public static getUniversitiesTitle = () => "Университетy"
  public static getBranchTitle = (branch: string) => branch
  public static getThemeTitle= (theme: string) => theme
  public static getCreateThemeTitle= () => "Создание темы"
  public static getMeTitle = () => "Профиль";
}
