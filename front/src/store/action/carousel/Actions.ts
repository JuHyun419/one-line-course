export interface SetCurIdx {
  type: "SET_CUR_IDX";
  idx: number;
}

export interface SetRef {
  type: "SET_REF";
  ref: React.RefObject<HTMLDivElement>;
}

export type Actions = SetCurIdx | SetRef;
