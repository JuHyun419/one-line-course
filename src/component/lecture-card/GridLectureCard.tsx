import React, { useCallback, useMemo } from "react";
import { getIcon } from "~/src/common";
import { ILectureFetchResult } from "~/src/typings";

import "./_LectureCard.scss";

export interface IGridLectureCardProps {
  lecture: ILectureFetchResult;
}

const GridLectureCard: React.FC<IGridLectureCardProps> = ({ lecture }) => {
  const {
    id,
    imageUrl,
    title,
    price,
    salePrices,
    rating,
    instructor,
    url,
    viewCount,
    platform,
    sessionCount,
    currency,
    description,
    skills,
  } = lecture;

  return (
    <li key={id} className="lectureCard-grid">
      <span className="lectureCard-grid--title">{title}</span>

      <img
        src={imageUrl}
        alt={`thumbnail--${title}`} 
        loading="lazy"
        className="lectureCard-grid--thumbnail"
      />
    </li>
  );
};

const makeBookmarkIcon = () => {
  // const _toggleBookmark = 
  const onClickIcon = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // toggle bookmark

  }, []);
  // const BookmarkIcon_Disabled = useMemo(getIcon("BookmarkIcon_Disabled"));
  // const BookmarkIcon_Enabled = useMemo(getIcon("BookmarkIcon_Enabled"));
};

export default GridLectureCard;
