import { ESearchActionType } from "../../../typings/type";
import { ISetKeywords } from "./Actions";

export const setKeywords = (keyword: string): ISetKeywords => ({
  type: ESearchActionType.Set_Keyword,
  keyword,
});
