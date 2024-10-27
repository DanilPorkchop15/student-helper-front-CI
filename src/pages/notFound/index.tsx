import { SmileOutlined } from "@ant-design/icons";
import { Empty } from "antd";

const CustomizeRenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

export const NotFoundPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SmileOutlined style={{ fontSize: 20 }} />
      <p>Data Not Found</p>
    </div>
  );
};
