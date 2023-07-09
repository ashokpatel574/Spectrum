import { useState } from "react";
import { useData } from "../../context/DataContext";

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchDropBox, setShowSearchDropBox] = useState(false);

  const {
    state: { users },
  } = useData();

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    setShowSearchDropBox(e.target.value.length > 0 && true);

    const result = users.filter((user) => {
      return user.firstname
        .toLowerCase()
        .toString()
        .startsWith(e.target.value.trim().toLowerCase());
    });
    setSearchResult(result);
  };

  const clearSearchHandler = () => {
    setSearchInput("");
    setShowSearchDropBox(false);
  };

  return {
    searchInput,
    searchHandler,
    searchResult,
    clearSearchHandler,
    showSearchDropBox,
    setShowSearchDropBox,
  };
};
