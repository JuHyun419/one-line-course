import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { TCombinedStates } from "~/src/store";
import { ELectureCardType } from "../../../typings";
import GridLectureCard from "../GridLectureCard";
import ListLectureCard from "../ListLectureCard";

interface ILectureCardFactoryProps {
  lectureCardType: ELectureCardType;
  count: number;
}

const LectureCardFactory: React.FC<ILectureCardFactoryProps> = (
  props: ILectureCardFactoryProps
) => <Fragment>{makeLectureCard(props)}</Fragment>;

const makeLectureCard = ({
  lectureCardType,
  count,
}: ILectureCardFactoryProps): JSX.Element[] | Error => {
  if (count < 0) {
    throw new Error("You can't make lecture card as much of below 0");
  }
  
  const lectures = useSelector(
    (state: TCombinedStates) => state.searchResult.lectures
  );
  let lectureCardsJSX: JSX.Element[];

  switch (lectureCardType) {
    case ELectureCardType.GridView:
      lectureCardsJSX = new Array(count).map((_, i: number) => (
        <GridLectureCard lecture={lectures[i]!} />
      ));
      break;

    case ELectureCardType.ListView:
      lectureCardsJSX = new Array(count).map(_ => <ListLectureCard />);
      break;

    default:
      throw new Error("wrong lecture card type!");
  }

  return lectureCardsJSX;
};

export default LectureCardFactory;
