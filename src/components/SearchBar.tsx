import { Input } from "antd";

const { Search } = Input;

type Props =  {
  onSearch: (value: string) => void;
  className: string;
}

export const SearchBar = ({ onSearch, className }: Props) => {
  return (
    <Search
      className= {className}
      placeholder="Search movies..."
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
};
