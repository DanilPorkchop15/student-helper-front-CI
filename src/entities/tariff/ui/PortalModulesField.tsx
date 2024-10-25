import type React from "react";
import { Flex, List } from "antd";

import type { PortalModule } from "../interfaces";

interface PortalModulesListProps {
  portalModules: PortalModule[];
}

export const PortalModulesField: React.FC<PortalModulesListProps> = ({ portalModules }) => {
  return (
    <List
      dataSource={portalModules}
      renderItem={(item) => (
        <List.Item>
          <Flex align="start">
            <span style={{ marginRight: "8px" }}>•</span>
            <div>{item.title}</div>
          </Flex>
        </List.Item>
      )}
      size="small"
    />
  );
};
