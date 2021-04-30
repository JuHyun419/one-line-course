import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import { ESeparatorDirection } from "~/src/typings";
import LecturePopup from "../lecture-popup/LecturePopup";
import Separator from "../separator/Separator";

import {
  LectureTitle,
  LectureBookmark,
  LectureThumbnail,
  LectureRating,
  LectureViewCount,
  LecturePrice,
  LecturePlatform,
  LectureSessionCount,
  LectureLanguage,
  LectureDescription,
  LectureInstructor,
} from "./";
import LectureGoToLecture from "./lecture-card-element/goToLecture/LectureGoToLecture";

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
  } = lecture!;

  const language = currency === "$" ? "EN" : "KR";

  const actualPrice =
    salePrices === 0 || salePrices === undefined ? price : salePrices;

  const openPopup = useCallback(() => setIsOpened(true), []);

  const closePopup = useCallback(() => setIsOpened(false), []);

  const lectureCardInfoJSX = useMemo(
    () => (
      <div onClick={openPopup}>
        <LectureTitle title={title} isCard />
        <LectureBookmark />
        <LectureThumbnail imageURL={imageUrl} title={title} isCard />
        <div className="lectureCard-grid-desc">
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
      </div>
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

  const lecturePopupInfoJSX = useMemo(
    () => (
      <Fragment>
        <LectureBookmark />
        <LectureThumbnail imageURL={imageUrl} title={title} isCard={false} />
        <div className="lecturePopup-close" onClick={closePopup}>
          X
        </div>
        <div className="lectureCard-separator"></div>
        <div className="lectureCard-grid-desc">
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
          <div className="lectureCard-separator"></div>
          <LectureTitle title={title} isCard={false} />
          <LectureGoToLecture link={url} />
          <LectureInstructor instructor={instructor} />
          <LectureDescription description={description} />
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
        <LecturePopup lectureID={id} onClose={closePopup}>
          {lecturePopupInfoJSX}
        </LecturePopup>
      ) : null,
    [isOpened, lecturePopupInfoJSX, id]
  );

  return (
    <li className="lectureCard-grid">
      {popupJSX}
      {lectureCardInfoJSX}
    </li>
  );
};

export default GridLectureCard;
