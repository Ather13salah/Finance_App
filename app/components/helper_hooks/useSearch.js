"use client";
import { useEffect, useState } from "react";
import useFinance from "./useFinance";
function useSearch(searchTerm) {
  const { financeData } = useFinance();
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    const search = () => {
      if (searchTerm.trim() === "") return [];
      return financeData?.expenses?.filter(
        (expense) =>
          expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          Number(expense.amount) == Number(searchTerm),
      );
    };
    const searchResults = search();
    setSearchResult(!searchResults ? [] : searchResults);
   
  }, [searchTerm]);
  return searchResult ?? [];
}

export default useSearch;
