import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";
import { TCombinedStates } from "../../../../../store";

import { setSelectedPlatform } from "../../../../../store/action/search";

export const useSearchBarSelectedPlatforms = (
  dispatch: Dispatch<any>
): JSX.Element[] => {
  const selectedPlatforms = useSelector(
    (state: TCombinedStates) => state.search.selectedPlatforms
  );

  const removePlatform = useCallback(
    (platform: string) => dispatch(setSelectedPlatform(platform)),
    []
  );

  const onClickSelectedPlatform = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) =>
      removePlatform((e.target as HTMLElement)?.innerText),
    []
  );

  // click to remove

  return useMemo(
    () =>
      selectedPlatforms.map(platform => (
        <li
          key={uuid()}
          className="searchBar--selected-platforms"
          onClick={onClickSelectedPlatform}
        >
          {platform}
        </li>
      )),
    [selectedPlatforms]
  );
};
