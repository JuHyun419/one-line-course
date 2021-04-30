import React from "react";

import "./_LectureGoToLecture.scss";

interface ILectureGoToLectureProps {
  link: string;
}

const LectureGoToLecture: React.FC<ILectureGoToLectureProps> = ({ link }) => (
  <a href={link} className="lecturePopup--goto-lecture" target="_blank">
    강좌 바로가기
  </a>
);

export default LectureGoToLecture;
