import React from "react";
import { Select } from "antd";
import type { University } from "../interfaces";

export const UniversitySelectView = React.memo(function UniversitySelectView({
  universities,
  value,
  onChange,
}: {
  universities: University[];
  value?: number;
  onChange: (universityId: number) => void;
}) {
  return (
    <Select
      allowClear
      placeholder="Выберите университет"
      value={value}
      onChange={onChange}
      options={universities.map((university) => ({
        label: university.name,
        value: university.id,
      }))}
      showSearch
    />
  );
});
