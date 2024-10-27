import React from "react";
import { useTitle } from "react-use";
import { Typography } from "antd";

import { BranchDetailsWidget } from "widgets/branchDetails";
import { useHeader } from "widgets/header";

import { useBranchDetails } from "entities/branch";

import { AppTitles } from "shared/model/services";
import { Layout } from "shared/ui/layout";

function BranchPage() {
  const branch = useBranchDetails();

  useTitle(AppTitles.getBranchTitle(branch.name));
  useHeader(<Typography.Title level={3}>{branch.name}</Typography.Title>);

  return (
    <Layout.Content>
      <Typography.Title level={2}>{branch.name}</Typography.Title>
      <BranchDetailsWidget />
    </Layout.Content>
  );
}

export const Component = React.memo(BranchPage);
