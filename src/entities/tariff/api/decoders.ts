import Decoder, { array, boolean, field, number, string, succeed } from "jsonous";

import { fieldOrFallback } from "shared/api";

import type { BaseTariff, Cost, PortalModule, TariffDetails, TariffListItem } from "../interfaces";

const portalModuleDecoder: Decoder<PortalModule> = succeed({})
  .assign("id", field("id", number))
  .assign("title", field("title", string));

export const portalModulesListDecoder: Decoder<PortalModule[]> = array(portalModuleDecoder);

const costDecoder: Decoder<Cost> = succeed({})
  .assign("month", fieldOrFallback("month", number))
  .assign("year", fieldOrFallback("year", number));

const baseTariffDecoder: Decoder<BaseTariff> = succeed({})
  .assign("id", field("id", number))
  .assign("title", field("title", string))
  .assign("isArchived", field("isArchived", boolean))
  .assign("cost", field("cost", costDecoder))
  .assign("portalModules", field("portalModules", portalModulesListDecoder));

export const tariffListItemDecoder: Decoder<TariffListItem> = baseTariffDecoder
  .assign("updatedAt", field("updatedAt", string))
  .assign("createdAt", field("createdAt", string))
  .assign("countAccounts", field("countAccounts", number));

export const tariffDetailsDecoder: Decoder<TariffDetails> = baseTariffDecoder.assign(
  "description",
  fieldOrFallback("description", string),
);
