import React, { Fragment } from "react";

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
}) => {
  return (
    <Fragment>
      imageURL === "undefined" ? (
      <img
        src={imageURL}
        alt={`thumbnail--${title}`}
        loading="lazy"
        className={
          isCard ? "lectureCard--thumbnail" : "lecturePopup--thumbnail"
        }
      />
      ) : null;
    </Fragment>
  );
};
export default LectureThumbnail;
