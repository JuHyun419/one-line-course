import { useCallback } from "react";

const useMoveToNextPage = (
  currentPage: number,
  totalPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  const onClick = useCallback(
    _ => {
      if (currentPage >= totalPage - 1) {
        return;
      }
      setCurrentPage(prv => prv + 1);
    },
    [currentPage, totalPage]
  );

  return { onClick, isDisabled: currentPage >= totalPage - 1 };
};

export default useMoveToNextPage;
