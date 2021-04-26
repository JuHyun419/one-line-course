import React from "react";

import "./_LecturePrice.scss";

interface ILecturePriceProps {
  price: number;
  currency: string;
}

const LecturePrice: React.FC<ILecturePriceProps> = ({ price, currency }) => {
  // TODO: Icon
  return <div className="lectureCard--price">{price}</div>;
};

export default LecturePrice;
