import { memo } from "react";
import { useParams } from "react-router";
import { UniversityView, useUniversityDetails } from "../../../../entities/university";

export const UniversityDetailsService = memo(function UniversityDetailsService(){
  const { id } = useParams();
  const university = useUniversityDetails()
  return (
    <UniversityView.Panel university={university} />
  );
})