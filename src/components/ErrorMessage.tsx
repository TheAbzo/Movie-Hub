import { ExclamationCircleOutlined } from "@ant-design/icons";

export const ErrorMessage = ({ message }: { message: string }) => (
  <div className=" error-message-style bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mt-4">
    <ExclamationCircleOutlined className="mr-2" />
    <span className="font-medium">Oops!</span> {message}
  </div>
);
