import React from "react";
import { v4 as uuid } from "uuid";

import "./_LectureCard.scss";

interface IListLectureCardProps {}

const ListLectureCard: React.FC<IListLectureCardProps> = () => {
  return <li key={uuid()} className="lectureCard-list"></li>;
};

export default ListLectureCard;
