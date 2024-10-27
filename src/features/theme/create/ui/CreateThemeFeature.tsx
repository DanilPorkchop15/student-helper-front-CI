import { useRef } from "react";
import { useAsyncFn } from "react-use";
import {
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  MDXEditor,
  type MDXEditorMethods,
  tablePlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { Button, Flex, Form, Input } from "antd";

import "@mdxeditor/editor/style.css";

interface Values {
  name: string;
  image: string;
}

export const CreateThemeFeature = () => {
  const ref = useRef<MDXEditorMethods>(null);
  const [form] = Form.useForm<Values>();

  const [] = useAsyncFn(async (body) => {}, []);

  return (
    <Flex vertical gap={20}>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        name="createTheme"
        size="middle"
        validateTrigger="onSubmit"
        onFinish={(values ) => {
          if (!ref.current) {
            return;
          }
          console.log(values, ref.current.getMarkdown());
        }}
      >
        <Form.Item name="name" label="Название темы" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="image" label="Изображение" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">Создать</Button>
        </Form.Item>
      </Form>
      <MDXEditor
        markdown="Распишите свою тему"
        ref={ref}
        plugins={[
          imagePlugin(),
          linkPlugin(),
          tablePlugin(),
          listsPlugin(),
          linkDialogPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertImage />
                <InsertTable />
                <ListsToggle />
                <CreateLink />
              </>
            ),
          }),
          headingsPlugin(),
        ]}
      />
    </Flex>
  );
};
