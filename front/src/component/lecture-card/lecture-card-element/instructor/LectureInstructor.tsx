import React from "react";

import "./_LectureInstructor.scss";

interface ILectureInstructorProps {
  instructor: string;
}

const LectureInstructor: React.FC<ILectureInstructorProps> = ({
  instructor,
}) => <div className="lecturePopup--instructor">{instructor}</div>;

export default LectureInstructor;
