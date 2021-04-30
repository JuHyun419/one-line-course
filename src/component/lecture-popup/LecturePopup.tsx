import React, { Fragment } from "react";
import Backdrop from "../backdrop/Backdrop";
import Comments from "../comment/Comments";

import "./_LecturePopup.scss";

interface ILecturePopupProps {
  lectureID: number;
  children: JSX.Element;
}

const LecturePopup: React.FC<ILecturePopupProps> = ({
  lectureID,
  children,
}) => {
  return (
    <Fragment>
      <Backdrop isUsed={true} />
      <div className="lecturePopup">
        <div className="lecturePopup--lecture">
          {children}
          <Comments lectureID={lectureID} />
        </div>
      </div>
    </Fragment>
  );
};

export default LecturePopup;
