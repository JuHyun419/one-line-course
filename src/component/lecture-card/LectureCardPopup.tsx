import React, { useCallback, useMemo, useState } from "react";
import ReactDOM from "react-dom";

import LectureGoToLecture from "./lecture-card-element/goToLecture/LectureGoToLecture";
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
  LectureLanguage,
  LectureDescription,
  LectureInstructor,
} from "./";
import { ILectureData } from "~/src/typings";

import "./_LectureCard.scss";
import { useGridViewContext } from "~/src/context/GridViewCtx";

export interface ILectureCardPopupProps {
  lecture: ILectureData | undefined;
  popupIdx: number;
}

const LectureCardPopup: React.FC<ILectureCardPopupProps> = ({
  lecture,
  popupIdx,
}) => {
  const {
    id,
    imageUrl,
    title,
    price,
    salePrice,
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
    salePrice === 0 || salePrice === undefined ? price : salePrice;

  const gridViewCtx = useGridViewContext();

  const lecturePopupInfoJSX = useMemo(
    () => (
      <>
        <LectureBookmark
          lectureId={id}
          // isUpdated={isBookmarkUpdated}
          // setIsUpdated={setIsBookmarkUpdated}
          isOnlyDisplay={false}
        />
        <LectureThumbnail imageURL={imageUrl} title={title} isCard={false} />
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
      </>
    ),
    [lecture]
  );

  const onClosePopup = useCallback(() => gridViewCtx.setPopupIdx(-1), []);

  const popupJSX =
    gridViewCtx.popupIdx === popupIdx
      ? ReactDOM.createPortal(
          <LecturePopup lectureID={id} onClose={onClosePopup}>
            {lecturePopupInfoJSX}
          </LecturePopup>,
          document.getElementById("popup-root")!
        )
      : null;

  return <>{popupJSX}</>;
};

export default React.memo(LectureCardPopup);
