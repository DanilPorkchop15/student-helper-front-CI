import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";

import { ThemeView, useThemeDetails } from "entities/theme";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function ThemeDetailsPage() {
  const theme = useThemeDetails();
  
  useTitle(AppTitles.getThemeTitle(theme.name));
  useHeader(<Typography.Title level={3}>{theme.name}</Typography.Title>);

  return (
    <Layout.Content>
      <Typography.Title level={2}>{theme.name}</Typography.Title>
      <ThemeView.Article theme={theme} />
    </Layout.Content>
  );
}

export const Component = React.memo(ThemeDetailsPage);
