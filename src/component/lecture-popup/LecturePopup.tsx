import React from "react";
import ReactDOM from "react-dom";
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
    <>
      {ReactDOM.createPortal(
        <Backdrop isUsed={true} onClose={onClose} />,
        document.getElementById("backdrop-root")!
      )}
      <div className="lecturePopup">
        <div className="lecturePopup--lecture">
          {children}
          <LecturePopupComments lectureID={lectureID} />
        </div>
      </div>
    </>
  );
};

export default LecturePopup;
