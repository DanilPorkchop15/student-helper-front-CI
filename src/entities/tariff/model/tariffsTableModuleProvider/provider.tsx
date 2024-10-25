import React from "react";
import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import { TariffsTableModule } from "./model";

const Context = React.createContext<TariffsTableModule | null>(null);

export const TariffsTableModuleProvider = React.memo(function TariffsTableModuleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tariffsTableModule = useInjectService(TariffsTableModule);

  return <Context.Provider value={tariffsTableModule}>{children}</Context.Provider>;
});

export function useTariffsTableModule(): TariffsTableModule {
  const tariffsTableModule = React.useContext(Context);

  if (isNil(tariffsTableModule)) {
    throw new Error("TariffsTableModule not found");
  }

  return tariffsTableModule;
}
