import React from "react";
import { getIcon } from "~/src/common";

import "./_LecturePlatform.scss";

interface ILecturePlatformProps {
  platform: string;
}

const LecturePlatform: React.FC<ILecturePlatformProps> = ({ platform }) => {
  const platformIcon = getIcon("Globe", undefined, { marginRight: "10px" });
  return (
    <div className="lectureCard--platform">
      {platformIcon}
      {platform}
    </div>
  );
};

export default LecturePlatform;
