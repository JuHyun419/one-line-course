import React from "react";

import "./_LectureDescription.scss";

interface ILectureDescriptionProps {
  description: string;
}

const LectureDescription: React.FC<ILectureDescriptionProps> = ({
  description,
}) => <div className="lectureCard--description">{description}</div>;

export default LectureDescription;
