import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// import { v4 as uuid } from "uuid";
import MoveToNextPage from "../moveToPage/MoveToNextPage";
import MoveToPreviousPage from "../moveToPage/MoveToPreviousPage";

import "./_Pagenator.scss";

interface IPagenatorProps {
  postsPerPage: number;
  children: JSX.Element[];
}

const Pagenator: React.FC<IPagenatorProps> = ({ postsPerPage, children }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [pagedPosts, setPagedPosts] = useState<JSX.Element[]>();

  // calc total pages
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

  console.log(pagedPosts);

  // TODO: useCallback +
  const onMoveToPrevPage = (e: React.MouseEvent<HTMLElement>) => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(prv => prv - 1);
  };

  const onMoveToNextPage = (e: React.MouseEvent<HTMLElement>) => {
    if (currentPage >= totalPage - 1) {
      return;
    }
    setCurrentPage(prv => prv + 1);
  };

  return (
    <Fragment>
      <MoveToPreviousPage
        onClick={onMoveToPrevPage}
        disable={currentPage === 0}
      />
      <MoveToNextPage
        onClick={onMoveToNextPage}
        disable={currentPage >= totalPage - 1}
      />
      {pagedPosts}
    </Fragment>
  );
};

export default Pagenator;
