import React from "react";

import { useHeaderContext } from "./config";

export const Header = React.memo(function Header() {
  const { node } = useHeaderContext();

  return <div>{node}</div>;
});

export { useHeader, HeaderProvider } from "./config";
