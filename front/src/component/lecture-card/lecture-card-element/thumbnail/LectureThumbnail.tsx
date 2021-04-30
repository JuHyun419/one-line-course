import React from "react";

import "./_LectureThumbnail.scss";

interface ILectureThumbnailProps {
  imageURL: string;
  title: string;
  isCard: boolean;
}

const LectureThumbnail: React.FC<ILectureThumbnailProps> = ({
  imageURL,
  title,
  isCard = true,
}) => (
  <img
    src={imageURL}
    alt={`thumbnail--${title}`}
    loading="lazy"
    className={isCard ? "lectureCard--thumbnail" : "lecturePopup--thumbnail"}
  />
);

export default LectureThumbnail;
