import { memo } from "react";

import { BranchView } from "entities/branch";
import { useBranchDetails } from "entities/branch/model/branchDetails";

export const BranchDetailsFeature = memo(function BranchDetailsFeature() {
  const branch = useBranchDetails();
  return <BranchView.Panel branch={branch} />;
});
