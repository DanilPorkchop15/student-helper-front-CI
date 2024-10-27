/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UniversityContact } from "./UniversityContact";
export type UpdateUniversityCommand = {
  id?: number;
  name: string | null;
  mainAddress: string | null;
  contacts: Array<UniversityContact> | null;
  information: string | null;
  image: string | null;
};
