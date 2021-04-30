import React, { Fragment } from "react";
import Backdrop from "../backdrop/Backdrop";
import Comments from "../comment/Comments";

import "./_LecturePopup.scss";

interface ILecturePopupProps {
  lectureID: number;
  children: JSX.Element;
  onClose: () => void;
}

const LecturePopup: React.FC<ILecturePopupProps> = ({
  lectureID,
  children,
  onClose,
}) => {
  return (
    <Fragment>
      <Backdrop isUsed={true} onClose={onClose}/>
      <div className="lecturePopup">
        <div className="lecturePopup--lecture">{children}</div>
        <Comments lectureID={lectureID} />
      </div>
    </Fragment>
  );
};

export default LecturePopup;
