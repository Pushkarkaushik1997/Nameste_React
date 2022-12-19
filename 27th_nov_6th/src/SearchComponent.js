import { useState } from "react";

const SearchDetails = (searchText,githubData) => {
    //logic for searching insid  e data
  return githubData.filter(
    (res) =>
      res?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      res?.location?.toLowerCase().includes(searchText.toLowerCase())||
      res?.company?.toLowerCase().includes(searchText.toLowerCase())
  );
};

const SearchComponent = ({ githubData, setFilteredPersons }) => {
  const [searchText, setSearchtext] = useState("");
  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const searchresults = SearchDetails(searchText,githubData);
          setFilteredPersons(searchresults);
        }}
      >
        <input
          id="search"
          placeholder="search"   
          className="searchBar"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchComponent;
