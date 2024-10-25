import React from "react";
import { useTitle } from "react-use";

import { AppTitles } from "shared/model/services";

function Home() {
  useTitle(AppTitles.getHomeTitle());

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
}

export const Component = React.memo(Home);
