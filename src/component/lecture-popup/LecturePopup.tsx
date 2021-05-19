import React, { Fragment } from "react";
import Backdrop from "../backdrop/Backdrop";
import LecturePopupComments from "./LecturePopupComments";

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
  // console.log("lecture ID", lectureID);
  return (
    <Fragment>
      <Backdrop isUsed={true} onClose={onClose} />
      <div className="lecturePopup">
        <div className="lecturePopup--lecture">
          {children}
          <LecturePopupComments lectureID={lectureID} />
        </div>
      </div>
    </Fragment>
  );
};

export default LecturePopup;
