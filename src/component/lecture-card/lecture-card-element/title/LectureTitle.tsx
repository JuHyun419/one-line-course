import React from "react";

import "./_LectureTitle.scss";

interface ILectureTitleProps {
  title: string;
}

const LectureTitle: React.FC<ILectureTitleProps> = ({ title }) => (
  <div className="lectureCard--title">{title}</div>
);

export default LectureTitle;
