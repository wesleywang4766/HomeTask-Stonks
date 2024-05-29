import React from "react";
import useInput from "../../hooks/useInput";

type SearchProps = {
  onSearch: (term: string) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const { value, handleChange } = useInput("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search by username or email"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
