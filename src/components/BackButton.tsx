import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      icon={<LeftOutlined />}
      onClick={() => navigate(-1)}
      style={{ marginBottom: "1rem" }}
    >
      Back
    </Button>
  );
};
