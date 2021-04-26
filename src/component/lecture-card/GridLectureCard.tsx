import React from "react";
import { useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";

import {
  LectureTitle,
  LectureBookmark,
  LectureThumbnail,
  LectureRating,
  LectureViewCount,
  LecturePrice,
  LecturePlatform,
  LectureSessionCount,
} from "./";

import "./_LectureCard.scss";

export interface IGridLectureCardProps {
  lectureIdx: number;
}

const GridLectureCard: React.FC<IGridLectureCardProps> = ({ lectureIdx }) => {
  const lecture = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures[lectureIdx]
  );

  const {
    title,
    imageUrl,
    rating,
    viewCount,
    salePrices,
    price,
    currency,
    platform,
    sessionCount,
  } = lecture!;

  return (
    <li className="lectureCard-grid">
      <LectureTitle title={title} />
      <LectureBookmark />
      <LectureThumbnail imageURL={imageUrl} title={title} />
      <LectureRating rating={rating} />
      <LectureViewCount viewCount={viewCount} />
      <LecturePrice
        price={salePrices === 0 ? price : salePrices}
        currency={currency}
      />
      <LecturePlatform platform={platform} />
      <LectureSessionCount sessionCount={sessionCount} />
    </li>
  );
};

export default GridLectureCard;
