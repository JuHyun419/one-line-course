import React from "react";
import { ELectureCardType } from "../../../typings";

interface ILectureCardFactoryProps {
  lectureCardType: ELectureCardType;
  count: number;
}

const LectureCardFactory: React.FC<ILectureCardFactoryProps> = (
  props: ILectureCardFactoryProps
) => {
  return <div></div>;
};

const makeLectureCard = ({
  lectureCardType,
  count,
}: ILectureCardFactoryProps) => {
  let lectureCardsJSX: JSX.Element;

  switch(lectureCardType) {
    case ELectureCardType.GridView:
      break;

    case ELectureCardType.ListView:
      break;

      
  }
};

export default LectureCardFactory;
