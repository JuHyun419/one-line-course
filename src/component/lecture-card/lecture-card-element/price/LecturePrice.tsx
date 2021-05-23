import React from "react";
import { getIcon } from "~/src/common";
import { TCurrency } from "~/src/typings";

import "./_LecturePrice.scss";

interface ILecturePriceProps {
  price: number;
  currency: TCurrency;
}

const LecturePrice: React.FC<ILecturePriceProps> = ({ price, currency }) => {
  let currencyID: string = "";
  let finalPrice: number | string;
  switch (currency) {
    case "$":
      currencyID = "Dollar-Sign";
      // 3 단위 ,
      finalPrice = price === 0 ? "무료" : price;
      break;

    case "₩":
    case "￦":
    default:
      currencyID = "Won-Sign";
      //  3 단위 ,
      finalPrice = price === 0 ? "무료" : `${price} 원`;
      break;
  }

  return (
    <div className="lectureCard--price">
      {getIcon(currencyID, undefined, { marginRight: "10px" })}
      {finalPrice}
    </div>
  );
};

export default LecturePrice;
