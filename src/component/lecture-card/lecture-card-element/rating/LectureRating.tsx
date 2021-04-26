import React from "react";
import { getIcon } from "~/src/common";

import "./_LectureRating.scss";

interface ILectureRatingProps {
  rating: number;
}

const LectureRating: React.FC<ILectureRatingProps> = ({ rating }) => {
  const ratingIcon = getIcon("Start");
  return (
    <div className="lectureCard--rating">
      {ratingIcon}
      <p>{rating}</p>
    </div>
  );
};

export default LectureRating;
