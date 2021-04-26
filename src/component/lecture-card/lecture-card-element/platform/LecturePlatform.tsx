import React from "react";

import "./_LecturePlatform.scss";

interface ILecturePlatformProps {
  platform: string;
}

const LecturePlatform: React.FC<ILecturePlatformProps> = ({ platform }) => {
  // TODO: Icon
  return <div className="lectureCard--platform">{platform}</div>;
};

export default LecturePlatform;
