import { Service } from "typedi";

import type { University } from "../../interfaces";

@Service()
export class UniversityListService {
  private readonly _universities: University[] = [];

  public get universityList() {
    return this._universities;
  }

  public async loadUniversityList(): Promise<void> {
    return Promise.resolve();
  }
}