import React from "react";

import "./_LectureTitle.scss";

interface ILectureTitleProps {
  title: string;
  isCard: boolean;
}

const LectureTitle: React.FC<ILectureTitleProps> = ({ title, isCard = true }) => (
  <div className={isCard ? "lectureCard--title" : "lecturePopup--title"}>{title}</div>
);

export default LectureTitle;
