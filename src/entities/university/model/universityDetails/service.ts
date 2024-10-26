import { Service } from "typedi";

import type { University } from "../../interfaces";

@Service()
export class UniversityDetailsService {
  private readonly _universityDetails: University | null = null;

  public get universityDetails() {
    return this._universityDetails;
  }

  public async loadUniversityDetails(id: number): Promise<void> {
    return Promise.resolve();
  }
}