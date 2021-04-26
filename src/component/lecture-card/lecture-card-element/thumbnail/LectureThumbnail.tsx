import React from "react";

import "./_LectureThumbnail.scss";

interface ILectureThumbnailProps {
  imageURL: string;
  title: string;
}

const LectureThumbnail: React.FC<ILectureThumbnailProps> = ({
  imageURL,
  title,
}) => (
  <img
    src={imageURL}
    alt={`thumbnail--${title}`}
    loading="lazy"
    className="lectureCard--thumbnail"
  />
);

export default LectureThumbnail;
