import React, { useMemo } from "react";
import { getIcon } from "~/src/common";

import "./_LectureLanguage.scss";

interface ILectureLanguageProps {
  language: string;
}

const LectureLanguage: React.FC<ILectureLanguageProps> = ({ language }) => {
  const languageIcon = useMemo(
    () => getIcon("Language", undefined, { marginRight: "10px" }),
    []
  );
  return (
    <div className="lectureCard--language">
      {languageIcon}
      {language}
    </div>
  );
};

export default LectureLanguage;
