import React from "react";
import { getIcon } from "~/src/common";

import "./_LecturePlatform.scss";

interface ILecturePlatformProps {
  platform: string;
}

const LecturePlatform: React.FC<ILecturePlatformProps> = ({ platform }) => (
  <div className="lectureCard--platform">
    {getIcon("Globe", undefined, { marginRight: "10px" })}
    {platform}
  </div>
);

export default LecturePlatform;
