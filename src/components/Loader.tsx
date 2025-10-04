import { Spin } from "antd";

export const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <Spin size="large" />
    </div>
  );
};
