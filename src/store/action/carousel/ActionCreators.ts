import { SetCurIdx, SetRef } from "./Actions";

export const setCurIdx = (idx: number): SetCurIdx => ({
  type: "SET_CUR_IDX",
  idx,
});

export const setRef = (ref: React.RefObject<HTMLDivElement>): SetRef => ({
  type: "SET_REF",
  ref,
});
