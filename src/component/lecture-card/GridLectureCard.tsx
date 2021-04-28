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
  LectureSkills,
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
    // skills,
  } = lecture!;
  const actualPrice =
    salePrices === 0 || salePrices === undefined ? price : salePrices;

  return (
    <li className="lectureCard-grid">
      <LectureTitle title={title} />
      <LectureBookmark />
      <LectureThumbnail imageURL={imageUrl} title={title} />
      <div className="lectureCard-gird-desc">
        <div className="lectureCard-grid--first-row">
          <div className="lectureCard-grid--cl1">
            <LectureRating rating={rating} />
            <LecturePlatform platform={platform} />
          </div>
          <div className="lectureCard-grid--cl2">
            <LectureViewCount viewCount={viewCount} />
            <LectureSessionCount sessionCount={sessionCount} />
          </div>
          <div className="lectureCard-grid-cl3">
            <LecturePrice price={actualPrice} currency={currency} />
          </div>
        </div>
        {/* <div className="lectureCard-grid--second-row">
          <LectureSkills skills={skills.filter(skill => skill !=)} />
        </div> */}
      </div>
    </li>
  );
};

export default GridLectureCard;
