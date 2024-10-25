export interface CreateCustomerDto {
  shortName: string;
  fullName?: string;
  director?: {
    post?: string;
    fullName?: string;
  };
  contactsData: {
    notificationEmail: string;
    address?: string;
    phone?: string;
  };
  companyDetails?: {
    inn?: string;
    kpp?: string;
    ogrn?: string;
    currentAccount?: string;
    correspondentAccount?: string;
    bankName?: string;
    bik?: string;
  };
  administrator?: {
    name: string;
    surname: string;
    phone: string;
    email: string;
  };
  contract?: {
    number?: string;
    date?: string;
  };
}

export interface UpdateCustomerDto extends CreateCustomerDto {}
