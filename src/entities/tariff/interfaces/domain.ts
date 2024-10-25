import type { UniqueEntity } from "shared/model/interfaces";

export interface Cost {
  month: number | null;
  year: number | null;
}

export interface PortalModule extends UniqueEntity {
  title: string;
}

export interface BaseTariff extends UniqueEntity {
  title: string;
  cost: Cost;
  isArchived: boolean;
  portalModules: PortalModule[];
}

export interface TariffListItem extends BaseTariff {
  updatedAt: ISO;
  createdAt: ISO;
  countAccounts: number;
}

export interface TariffDetails extends BaseTariff {
  description: string | null;
}
