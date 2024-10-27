import React, { memo } from "react";
import { Flex, Image, Typography } from "antd";
import type { Theme } from "../interfaces";
import Markdown from "react-markdown";
import { ContactsView } from "../../contact";

export interface ThemeArticleViewProps {
  theme: Theme;
}

export const ThemeArticleView = memo(function ThemeArticleView({ theme }: ThemeArticleViewProps) {
  return (
    <Flex vertical gap={16}>
      <Flex vertical gap={8}>
        <Typography.Title level={2}>{theme.name}</Typography.Title>
        <Typography.Text>Автор: {theme.author.fullName}</Typography.Text>
      </Flex>
      <Image alt={theme.name} src={theme.image} />
      <Typography.Paragraph>
        <Markdown>{theme.text}</Markdown>
      </Typography.Paragraph>
      <ContactsView.List contacts={theme.contacts} />
    </Flex>
  );
});
