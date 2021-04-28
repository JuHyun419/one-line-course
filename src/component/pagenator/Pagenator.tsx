import React, { Fragment, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

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
    setTotalPage(Math.floor(children.length / postsPerPage));
  }, [setTotalPage, children.length, postsPerPage]);

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

  return <Fragment>{pagedPosts}</Fragment>;
};

export default Pagenator;
