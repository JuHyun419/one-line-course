import React from "react";
import { EButtonSize, EButtonType } from "../../../../../../typings/type";
import Button from "../../../../../../component/button/Button";

import "./_SearchBarButton.scss";
import { TCombinedStates } from "../../../../../../store";
import { useSelector } from "react-redux";

const SearchButton: React.FC = () => {
  const selectedKeywords = useSelector(
    (state: TCombinedStates) => state.search.selectedKeywords
  );
  const selectedPlatforms = useSelector(
    (state: TCombinedStates) => state.search.selectedPlatforms
  );
  
  // start search

  
  return (
    <Button
      btnSize={EButtonSize.XSmall}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--btn-search"
      additionalStyles={{ fontSize: "0.9rem" }}
    >
      검색
    </Button>
  );
};

export default SearchButton;
