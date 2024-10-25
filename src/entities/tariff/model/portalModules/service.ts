import { Inject, Service } from "typedi";

import { PortalModulesApi } from "../../api";
import type { PortalModule } from "../../interfaces";

@Service()
export class PortalModulesService {
  private _portalModules: PortalModule[] | null = null;

  @Inject()
  private readonly _api!: PortalModulesApi;

  public get portalModules(): PortalModule[] | null {
    return this._portalModules;
  }

  public async loadPortalModules(): Promise<void> {
    this._portalModules = await this._api.getPortalModules();
  }
}
