import React, { useCallback } from "react";
import { useGridViewContext } from "~/src/context/GridViewCtx";

import { ILectureData } from "~/src/typings";

import {
  LectureBookmark,
  LectureLanguage,
  LecturePlatform,
  LecturePrice,
  LectureRating,
  LectureSessionCount,
  LectureThumbnail,
  LectureTitle,
  LectureViewCount,
} from "./";

import "./_LectureCard.scss";

export interface IGridLectureCardProps {
  lecture: ILectureData;
  popupIdx: number;
}

const GridLectureCard: React.FC<IGridLectureCardProps> = ({
                                                            lecture: {
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
                                                            },
                                                            popupIdx,
                                                          }) => {
  const language = currency === "$" ? "EN" : "KR";

  const actualPrice =
    salePrice === 0 || salePrice === undefined ? price : salePrice;

  const gridViewCtx = useGridViewContext();

  const onOpenPopup = useCallback(() => {
    gridViewCtx.setPopupIdx(popupIdx);
  }, []);

  return <li className="lectureCard-grid">
    <div onClick={onOpenPopup}>
      <LectureTitle title={title} isCard/>

      <LectureBookmark lectureId={id} isOnlyDisplay/>

      <LectureThumbnail imageURL={imageUrl} title={title} isCard/>
     
      <div className="lectureCard-grid-desc">
        <div className="lectureCard-grid--first-row">
          <div className="lectureCard-grid--cl1">
            <LectureRating rating={rating}/>
            <LecturePlatform platform={platform}/>
          </div>

          <div className="lectureCard-grid--cl2">
            <LectureViewCount viewCount={viewCount}/>
            <LectureSessionCount sessionCount={sessionCount}/>
          </div>

          <div className="lectureCard-grid-cl3">
            <LecturePrice price={actualPrice} currency={currency}/>
            <LectureLanguage language={language}/>
          </div>
        </div>
      </div>
    </div>
  </li>;
};

export default GridLectureCard;
