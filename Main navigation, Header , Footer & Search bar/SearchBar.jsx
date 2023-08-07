// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // Pass the query to the parent component (e.g., Bookstore) for handling the search logic
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
