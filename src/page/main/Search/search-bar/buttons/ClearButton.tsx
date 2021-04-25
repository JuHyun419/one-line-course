import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { EButtonSize, EButtonType } from "../../../../../typings/type";
import Button from "../../../../../component/button/Button";
import { clearSelectedAll } from "../../../../../store/action/search/ActionCreators";

import "./_SearchBarButton.scss";

const ClearButton: React.FC = () => {
  // clear selected keywords all
  const dispatch = useDispatch();
  const _clearAll = useCallback(() => dispatch(clearSelectedAll()), []);
  const onClickClearButton = useCallback(
    (_: React.MouseEvent<HTMLDivElement>) => _clearAll(),
    [_clearAll]
  );

  return (
    <Button
      btnSize={EButtonSize.Small}
      btnType={EButtonType.Primary}
      additionalClassName="searchBar--clearBtn"
      onClick={onClickClearButton}
    >
      비우기
    </Button>
  );
};
export default ClearButton;
