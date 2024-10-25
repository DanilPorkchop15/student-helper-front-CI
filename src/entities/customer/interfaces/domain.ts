import type { User } from "entities/user/@x";

import type { UniqueEntity } from "shared/model/interfaces";

interface Director {
  post: string | null;
  fullName: string | null;
}

interface ContactsData {
  notificationEmail: string;
  address: string | null;
  phone: string | null;
}

interface CompanyDetails {
  inn: number | null;
  kpp: number | null;
  ogrn: number | null;
  currentAccount: number | null;
  correspondentAccount: number | null;
  bankName: string | null;
  bik: number | null;
}

interface Contract {
  number: string | null;
  date: ISO | null;
}

export interface Administrator extends User {
  phone: string | null;
}

export interface BaseCustomer extends UniqueEntity {
  shortName: string;
  isActive: boolean;
  contract: Contract | null;
}

export interface CustomerListItem extends BaseCustomer {
  inn: number | null;
  contractNumber: string | null;
  contractDate: ISO | null;
}

export interface CustomerInfo extends BaseCustomer {
  fullName: string | null;
  director: Director | null;
  contactsData: ContactsData;
  companyDetails: CompanyDetails | null;
  administrator: Administrator;
}
