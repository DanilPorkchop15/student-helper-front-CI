import React from "react";
import { ConfigProvider, Flex, Layout, theme as antdTheme, type ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Layout: {
      bodyBg: "#647C80",
      headerBg: "#647C80",
      footerBg: "#647C80",
      siderBg: "#647C80",
    },
  },
};

interface MainLayoutProps {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const MAIN_SECTION_PADDING = "96px 370px 0 0";
const CONTENT_SECTION_PADDING = "64px 100px";

export const MainLayout = React.memo(function MainLayout({ sidebar, content, header, footer }: MainLayoutProps) {
  const { token } = antdTheme.useToken();
  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: "100vh", height: "spread" }}>
        <Flex style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
          <div style={{ minHeight: "100vh" }}>{sidebar}</div>
          <Flex
            vertical
            flex={1}
            justify="space-between"
            style={{ height: "100%", padding: MAIN_SECTION_PADDING, minHeight: "100vh" }}
          >
            <Flex
              vertical
              flex={1}
              gap={40}
              style={{
                boxShadow: token.boxShadow,
                background: token.colorBgContainer,
                borderRadius: token.borderRadiusLG,
                padding: CONTENT_SECTION_PADDING,
              }}
            >
              {header}
              {content}
            </Flex>
            {footer}
          </Flex>
        </Flex>
      </Layout>
    </ConfigProvider>
  );
});
