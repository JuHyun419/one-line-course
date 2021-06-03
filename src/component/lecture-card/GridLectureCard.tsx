import React, { useCallback, useMemo, useState } from "react";
import { useGridViewContext } from "~/src/context/GridViewCtx";

import { ILectureData } from "~/src/typings";

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
} from "./";

import "./_LectureCard.scss";

export interface IGridLectureCardProps {
  lecture: ILectureData | undefined;
  popupIdx: number;
}

const GridLectureCard: React.FC<IGridLectureCardProps> = ({
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
    viewCount,
    platform,
    sessionCount,
    currency,
  } = lecture!;

  const language = currency === "$" ? "EN" : "KR";

  const actualPrice =
    salePrice === 0 || salePrice === undefined ? price : salePrice;

  const gridViewCtx = useGridViewContext();

  const onOpenPopup = useCallback(() => {
    gridViewCtx.setPopupIdx(popupIdx);
  }, []);

  const lectureCardInfoJSX = useMemo(
    () => (
      <div onClick={onOpenPopup}>
        <LectureTitle title={title} isCard />
        <LectureBookmark lectureId={id} isOnlyDisplay />
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
    [lecture]
  );

  return <li className="lectureCard-grid">{lectureCardInfoJSX}</li>;
};

export default GridLectureCard;
