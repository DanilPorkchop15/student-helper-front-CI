import React from "react";
import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import { CustomersTableModule } from "./model";

const Context = React.createContext<CustomersTableModule | null>(null);

export const CustomersTableModuleProvider = React.memo(function CustomersTableModuleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const customersTableModule = useInjectService(CustomersTableModule);

  return <Context.Provider value={customersTableModule}>{children}</Context.Provider>;
});

export function useCustomersTableModule(): CustomersTableModule {
  const customersTableModule = React.useContext(Context);

  if (isNil(customersTableModule)) {
    throw new Error("CustomersTableModule not found");
  }

  return customersTableModule;
}
