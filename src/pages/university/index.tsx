import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { useHeader } from "widgets/header";
import { UniversityDetailsWidget } from "widgets/universityDetails";

import { useUniversityDetails } from "entities/university";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function UniversityPage() {
  const university = useUniversityDetails()

  useTitle(AppTitles.getHomeTitle());
  useHeader(<Typography.Title level={3}>{AppTitles.getUniversityTitle(university.name)}</Typography.Title>);

  return (
    <Layout.Content>
      <Typography.Title level={2}>{university.name}</Typography.Title>
      <UniversityDetailsWidget />
    </Layout.Content>
  );
}

export const Component = React.memo(UniversityPage);