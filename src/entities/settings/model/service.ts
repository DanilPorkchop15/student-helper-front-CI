import { Inject, Service } from "typedi";

import { SettingsApi } from "../api";
import type { Settings } from "../interfaces";

@Service()
export class SettingsService {
  private _settings: Settings | null = null;

  @Inject()
  private readonly _api!: SettingsApi;

  public get settings(): Settings | null {
    return this._settings;
  }

  public async loadSettings(): Promise<void> {
    this._settings = await this._api.getSettings();
  }
}
