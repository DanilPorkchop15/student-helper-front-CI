import Decoder, { array, field, number, string, succeed } from "jsonous";

import { contactsListDecoder } from "entities/contact/@x";
import { userDecoder } from "entities/user/@x";

import type { Theme } from "../interfaces";

export const themeDecoder: Decoder<Theme> = succeed({})
  .assign("id", field("id", number))
  .assign("name", field("name", string))
  .assign("text", field("text", string))
  .assign("contacts", field("contacts", contactsListDecoder))
  .assign("image", field("image", string))
  .assign("author", field("author", userDecoder));

export const themesListDecoder: Decoder<Theme[]> = array(themeDecoder)