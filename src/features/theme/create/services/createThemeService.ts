import { Inject, Service } from "typedi";

import { ThemeApi } from "entities/theme";

@Service()
export class CreateThemeService {
  @Inject()
  private readonly _api!: ThemeApi;
}