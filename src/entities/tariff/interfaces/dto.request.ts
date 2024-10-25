export interface CreateTariffDto {
  title: string;
  portalModules: { id?: Guid; title?: string }[];
  cost: {
    month?: number;
    year?: number;
  };
  description?: string;
}

export interface UpdateTariffDto extends CreateTariffDto {}
