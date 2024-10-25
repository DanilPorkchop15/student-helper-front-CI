export interface UpdateSettingsDto {
  blockAccount: {
    expirationPeriodInDays: number;
  };
  support: {
    email: string;
    phone: string;
    notificationEmail: string;
  };
  superAdminLogin: string;
}
