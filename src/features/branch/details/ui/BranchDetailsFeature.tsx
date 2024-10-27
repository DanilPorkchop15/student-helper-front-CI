import { memo } from "react";
import { useBranchDetails } from "entities/branch/model/branchDetails";
import { BranchView } from "entities/branch";

export const BranchDetailsFeature = memo(function BranchDetailsFeature(){
  const branch = useBranchDetails()
  return (
    <BranchView.Panel branch={branch} />
  );
})