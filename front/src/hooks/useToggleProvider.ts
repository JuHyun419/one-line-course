import { useState, useCallback, useMemo } from "react";

/**
 *
 * @param stateName
 * @param toggleName
 * @returns
 */
const useToggleProvider = <TContextData extends {}>(
  stateName: string,
  toggleName: string
) => {
  const [isOn, setIsOn] = useState(false);

  const onToggle = useCallback(() => setIsOn(prv => !prv), [isOn, setIsOn]);

  const providerValue = useMemo(
    () =>
      ({
        [stateName]: isOn,
        [toggleName]: onToggle,
      } as TContextData),
    [isOn, onToggle]
  );

  return { providerValue };
};

export default useToggleProvider;
