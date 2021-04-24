import React from "react";
import { EButtonSize, EButtonType } from "../../../../../../typings/type";
import Button from "../../../../../../component/button/Button";

import "./_SearchBarButton.scss";

const SearchButton: React.FC = () => (
  <Button
    btnSize={EButtonSize.XSmall}
    btnType={EButtonType.Primary}
    additionalClassName="searchBar--btn-search"
    additionalStyles={{ fontSize: "0.9rem" }}
  >
    검색
  </Button>
);

export default SearchButton;
