import { Service } from "typedi";

import type { Theme } from "../../interfaces";

@Service()
export class ThemeDetailsService {
  private readonly _themeDetails: Theme | null = null;

  public get themeDetails () {
    return this._themeDetails
  }

  public async loadThemeDetails(id: number): Promise<void> {
    return Promise.resolve();
  }
}