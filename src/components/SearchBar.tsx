import { Input } from "antd";

const { Search } = Input;

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  className: string;
};

export const SearchBar = ({ value, onChange, onSearch, className }: Props) => {
  return (
    <Search
      className={className}
      placeholder="Search movies..."
      allowClear
      enterButton="Search"
      size="large"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onSearch={onSearch}
    />
  );
};
