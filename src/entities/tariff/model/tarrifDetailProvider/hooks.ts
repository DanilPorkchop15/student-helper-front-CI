import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { TariffDetails } from "../../interfaces";

import { TariffDetailsService } from "./service";

export function useTariffDetails(): TariffDetails {
  const tariffDetails = useInjectService(TariffDetailsService).tariffDetails;

  if (isNil(tariffDetails)) throw new Error("TariffDetails not found");

  return tariffDetails;
}
