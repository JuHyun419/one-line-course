import React, { useCallback, useEffect, useMemo, useState } from "react";
import MoveToNextPage from "../moveToPage/MoveToNextPage";
import MoveToPreviousPage from "../moveToPage/MoveToPreviousPage";


interface IPagenatorProps {
  postsPerPage: number;
  children: JSX.Element[];
}

const Pagenator: React.FC<IPagenatorProps> = ({ postsPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [pagedPosts, setPagedPosts] = useState<JSX.Element[]>();

  // calc total pages - calculated at first only once
  useEffect(() => {
    if (postsPerPage <= 0) {
      throw new Error("Posts per page can't be below 0");
    }
    const totalP = Math.floor(children.length / postsPerPage);
    setTotalPage(totalP - 1);
  }, []);

  // calc lectures arrays
  // e.g. postPerPage: 9
  // -> 0 ~ 8 / 9 ~ 17 / 18 ~ 27 / 28 ~ 37
  useEffect(
    () =>
      setPagedPosts(
        children.slice(
          currentPage * postsPerPage,
          (currentPage + 1) * postsPerPage
        )
      ),
    [currentPage, postsPerPage]
  );

  const { onClick: onMoveToNextPage, isDisabled: isMoveToNextPageDisabled } =
    useMoveToNextPage(currentPage, totalPage, setCurrentPage);

  const { onClick: onMoveToPrevPage, isDisabled: isMoveToPrevPageDisabled } =
    useMoveToPreviousPage(currentPage, setCurrentPage);

  return (
    <>
      <MoveToPreviousPage
        onClick={onMoveToPrevPage}
        disable={isMoveToPrevPageDisabled}
      />
      <MoveToNextPage
        onClick={onMoveToNextPage}
        disable={isMoveToNextPageDisabled}
      />
      {pagedPosts}
    </>
  );
};

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

  const isDisabled = useMemo(() => currentPage === 0, [currentPage]);

  return { onClick, isDisabled };
};

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

  const isDisabled = useMemo(
    () => currentPage >= totalPage - 1,
    [currentPage, totalPage]
  );

  return { onClick, isDisabled };
};

export default Pagenator;
