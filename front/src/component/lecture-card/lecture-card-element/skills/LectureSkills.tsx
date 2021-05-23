import React, { useMemo } from "react";
import { getIcon } from "~/src/common";

import "./_LectureSkills.scss";

interface ILectureSkillsProps {
  skills: string;
}

const LectureSkills: React.FC<ILectureSkillsProps> = ({ skills }) => {
  const eachSkillsJSXs: JSX.Element[] = useMemo(
    () => skills?.split(",").map((skill: string) => <li>{skill}</li>),
    [skills]
  );

  return (
    <div className="lectureCard--skills">
      {getIcon("Language", undefined, { marginRight: "10px" })}
      <div className="lectureCard--skills-each">{eachSkillsJSXs}</div>
    </div>
  );
};

export default LectureSkills;
