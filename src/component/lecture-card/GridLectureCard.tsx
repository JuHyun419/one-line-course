import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import LecturePopup from "../lecture-popup/LecturePopup";

import {
  LectureTitle,
  LectureBookmark,
  LectureThumbnail,
  LectureRating,
  LectureViewCount,
  LecturePrice,
  LecturePlatform,
  LectureSessionCount,
  // LectureSkills,
} from "./";
import LectureLanguage from "./lecture-card-element/language/LectureLanguage";

import "./_LectureCard.scss";

export interface IGridLectureCardProps {
  lectureIdx: number;
}

const GridLectureCard: React.FC<IGridLectureCardProps> = ({ lectureIdx }) => {
  const [isOpened, setIsOpened] = useState(false);
  const lecture = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures[lectureIdx]
  );

  const {
    id,
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

  const language = currency === "$" ? "EN" : "KR";

  const actualPrice =
    salePrices === 0 || salePrices === undefined ? price : salePrices;

  const onClickCard = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setIsOpened(prv => !prv);
  }, []);

  const lectureInfoJSX = useMemo(
    () => (
      <Fragment>
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
              <LectureLanguage language={language} />
            </div>
          </div>
        </div>
      </Fragment>
    ),
    [
      imageUrl,
      title,
      rating,
      platform,
      viewCount,
      sessionCount,
      actualPrice,
      currency,
      language,
    ]
  );

  const popupJSX = useMemo(
    () =>
      isOpened ? (
        <LecturePopup lectureID={id}>{lectureInfoJSX}</LecturePopup>
      ) : null,
    [isOpened, lectureInfoJSX, id]
  );

  return (
    <li className="lectureCard-grid" onClick={onClickCard}>
      {popupJSX}
      <LectureTitle title={title} />
      <LectureBookmark />
      {lectureInfoJSX}
    </li>
  );
};

export default GridLectureCard;
