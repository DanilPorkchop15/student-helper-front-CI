import { Fragment, memo } from "react";
import { useUniversityDetails } from "entities/university";
import { BranchView } from "entities/branch";
import { Flex } from "antd";

export const BranchListFeature = memo(function BranchListFeature() {
  const { id, branches } = useUniversityDetails();
  return (
    <Flex wrap gap={20} justify="space-between">
      {branches.map((branch) => (
        <BranchView.Card key={branch.id} branch={branch} universityId={id} />
      ))}
    </Flex>
  );
});
