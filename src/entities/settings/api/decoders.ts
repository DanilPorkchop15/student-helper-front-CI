import Decoder, { field, number, string, succeed } from "jsonous";

import type { Settings } from "../interfaces";

const blockAccountDecoder: Decoder<Settings["blockAccount"]> = succeed({}).assign(
  "expirationPeriodInDays",
  field("expirationPeriodInDays", number),
);

const supportDecoder: Decoder<Settings["support"]> = succeed({})
  .assign("email", field("email", string))
  .assign("phone", field("phone", string))
  .assign("notificationEmail", field("notificationEmail", string));

export const settingsDecoder: Decoder<Settings> = succeed({})
  .assign("blockAccount", field("blockAccount", blockAccountDecoder))
  .assign("support", field("support", supportDecoder))
  .assign("superAdminLogin", field("superAdminLogin", string));
