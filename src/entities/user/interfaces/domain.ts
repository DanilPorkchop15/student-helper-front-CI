import type { University } from "entities/university/@x";

import type { UniqueEntity } from "shared/model/interfaces";

export interface User extends UniqueEntity {
  fullName: string;
  login: string;
  sex: string
  age: number,
  university: University
}
