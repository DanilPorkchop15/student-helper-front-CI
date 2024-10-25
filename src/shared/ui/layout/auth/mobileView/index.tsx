import React from "react";
import { Layout as AntdLayout, theme, Typography } from "antd";

import styles from "./index.module.scss";

interface AuthLayoutProps {
  content: React.ReactNode;
}

export const MobileView = React.memo(function MobileView({ content }: AuthLayoutProps) {
  const { token } = theme.useToken();

  return (
    <AntdLayout style={{ backgroundImage: `url("/assets/auth-background-mobile.png")` }}>
      <AntdLayout.Header style={{ paddingTop: token.paddingLG }}>
        <img alt="" src="/assets/WS-Logo.svg" />
      </AntdLayout.Header>
      <AntdLayout.Content>
        <div className={styles.contentWrapper}>{content}</div>
      </AntdLayout.Content>
      <AntdLayout.Footer style={{ backgroundColor: token.colorWhite }}>
        <Typography.Text type="secondary">
          2023 <br /> © Work Solutions
        </Typography.Text>
        <img alt="" src="/assets/WS-Logo-Copyright.svg" />
      </AntdLayout.Footer>
    </AntdLayout>
  );
});
