import { ESearchActionType } from "../../../typings/type";

export interface ISetKeywords {
  type: ESearchActionType.Set_Keyword;
  keyword: string;
}

export type TActions = ISetKeywords;
