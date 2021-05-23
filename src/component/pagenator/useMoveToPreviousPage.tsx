import { useCallback, useMemo } from "react";

const useMoveToPreviousPage = (
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const onClick = useCallback(
    _ => {
      if (currentPage === 0) {
        return;
      }
      setCurrentPage(prv => prv - 1);
    },
    [currentPage]
  );
  
  return { onClick, isDisabled: currentPage === 0 };
};

export default useMoveToPreviousPage;
