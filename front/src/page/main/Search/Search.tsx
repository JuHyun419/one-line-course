import React from "react";
import KeywordSelectorCtrl from "../Keyword-selector/KeywordSelectorCtrl";
import SearchCtrl from "./Search-elements/SearchCtrl";

import "./_Search.scss";

const Search: React.FC<{}> = () => {
  return (
    <div className="search">
      <SearchCtrl />
      <KeywordSelectorCtrl />
    </div>
  );
};

export default Search;
