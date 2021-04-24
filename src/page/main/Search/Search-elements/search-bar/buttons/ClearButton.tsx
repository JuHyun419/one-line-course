import React from "react";
import { EButtonSize, EButtonType } from "../../../../../../typings/type";
import Button from "../../../../../../component/button/Button";

import "./_SearchBarButton.scss";

const ClearButton: React.FC = () => (
  <Button
    btnSize={EButtonSize.Small}
    btnType={EButtonType.Primary}
    additionalClassName="searchBar--clearBtn"
  >
    비우기
  </Button>
);

export default ClearButton;
