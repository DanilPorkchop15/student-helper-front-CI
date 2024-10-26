import { Service } from "typedi";

import type { Branch } from "../../interfaces";

@Service()
export class BranchDetailsService {
  private readonly _branchDetails: Branch | null = null;

  public get branchDetails () {
    return this._branchDetails
  }

  public async loadBranchDetails(id: number): Promise<void> {
    return Promise.resolve();
  }
}