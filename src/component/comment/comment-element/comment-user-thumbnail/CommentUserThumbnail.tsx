import React from "react";

import "./_CommentUserThumbnail.scss";

interface ICommentUserThumbnailProps {
  imageURL: string;
  altName: string;
}

const CommentUserThumbnail: React.FC<ICommentUserThumbnailProps> = ({
  imageURL,
  altName,
}) => {
  return (
    <img
      src={imageURL}
      alt={`${altName}'s thumbnail`}
      // TODO: default image in the case of when image is loaded invalid
      className="comment--user-thumbnail"
      loading="lazy"
    ></img>
  );
};

export default CommentUserThumbnail;
