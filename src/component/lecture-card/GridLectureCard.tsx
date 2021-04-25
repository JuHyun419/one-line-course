import React from "react";
import { ELectureCardType } from "../../typings/type";

import "./_LectureCard.scss";

export interface ILectureCardProps {
  cardType: ELectureCardType;
}

const GridLectureCard: React.FC<ILectureCardProps> = ({ cardType }) => {
  return <div className="lectureCard-grid"></div>;
};

export default GridLectureCard;
