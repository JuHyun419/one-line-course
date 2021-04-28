import React from "react";
import { getIcon } from "~/src/common";

import "./_LectureRating.scss";

interface ILectureRatingProps {
  rating: number;
}

const LectureRating: React.FC<ILectureRatingProps> = ({ rating }) => {
  const ratingIcon = getIcon("Star", undefined, { marginRight: "10px" });
  return (
    <div className="lectureCard--rating">
      {ratingIcon}
      <p>{rating.toFixed(1)} / 5.0</p>
    </div>
  );
};

export default LectureRating;
