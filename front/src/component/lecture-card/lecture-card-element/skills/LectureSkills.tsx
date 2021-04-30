import React, { useMemo } from "react";
import { getIcon } from "~/src/common";

import "./_LectureSkills.scss";

interface ILectureSkillsProps {
  skills: string;
}

const LectureSkills: React.FC<ILectureSkillsProps> = ({ skills }) => {
  const eachSkills: JSX.Element[] = useMemo(
    () =>
      skills
        ?.split(",")
        .map((skill: string) => `${skill} `)
        .map(skill => <li>{skill}</li>),
    [skills]
  );
  const skillIcon = getIcon("Language", undefined, { marginRight: "10px" });

  return (
    <div className="lectureCard--skills">
      {skillIcon}
      <div className="lectureCard--skills-each">{eachSkills}</div>
    </div>
  );
};

export default LectureSkills;
