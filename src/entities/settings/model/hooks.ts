import { isNil } from "ramda";

import { useInjectService } from "shared/lib/useInjectService";

import type { Settings } from "../interfaces";

import { SettingsService } from "./service";

export function useSettings(): Settings {
  const settingsService = useInjectService(SettingsService);

  const settings = settingsService.settings;

  if (isNil(settings)) throw new Error("settings not found");

  return settings;
}
