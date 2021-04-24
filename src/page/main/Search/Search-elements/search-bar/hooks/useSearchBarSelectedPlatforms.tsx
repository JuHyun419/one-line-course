import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { TCombinedStates } from "../../../../../../store";

export const useSearchBarSelectedPlatforms = (): JSX.Element[] => {
  const selectedPlatforms = useSelector(
    (state: TCombinedStates) => state.search.selectedPlatforms
  );

  return useMemo(
    () =>
      selectedPlatforms?.map(platform => (
        <li key={uuid()} className="searchBar--selected-platforms">
          {platform}
        </li>
      )),
    [selectedPlatforms]
  );
};
