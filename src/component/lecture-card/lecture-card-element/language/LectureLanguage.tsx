import React, { useMemo } from "react";
import { getIcon } from "~/src/common";

import "./_LectureLanguage.scss";

interface ILectureLanguageProps {
  language: string;
}

const LectureLanguage: React.FC<ILectureLanguageProps> = ({ language }) => (
  <div className="lectureCard--language">
    {getIcon("Language", undefined, { marginRight: "10px" })}
    {language}
  </div>
);

export default LectureLanguage;
