import { Input } from "antd";

const { Search } = Input;

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <Search
      placeholder="Search movies..."
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      style={{ width: 400, marginBottom: "2rem" }}
    />
  );
};
