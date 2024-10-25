import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { PortalModule } from "../../interfaces";

import { PortalModulesService } from "./service";

export function usePortalModules(): PortalModule[] {
  const portalModules = useInjectService(PortalModulesService).portalModules;

  if (isNil(portalModules)) throw new Error("PortalModules not found");

  return portalModules;
}
