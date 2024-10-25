import { SettingsOpenApi } from "api";
import { Service } from "typedi";

import { applyDecoder } from "shared/lib/applyDecoder";

import type { Settings } from "../interfaces";

import { settingsDecoder } from "./decoders";

@Service()
export class SettingsApi {
  public async getSettings(): Promise<Settings> {
    return SettingsOpenApi.getSettings().then(applyDecoder(settingsDecoder));
  }
}
