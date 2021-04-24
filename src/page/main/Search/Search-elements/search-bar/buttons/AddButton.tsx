import React from "react";
import { EButtonSize, EButtonType } from "../../../../../../typings/type";
import Button from "../../../../../../component/button/Button";

import "./_SearchBarButton.scss";

const AddButton: React.FC = () => (
  <Button
    btnSize={EButtonSize.Small}
    btnType={EButtonType.Primary}
    additionalClassName="searchBar--btn-add"
  >
    추가
  </Button>
);

export default AddButton;
