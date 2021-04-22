export interface SetCurIdx {
  type: "SET_CUR_IDX";
  idx: number;
}

export interface SetRef {
  type: "SET_REF";
  ref: React.RefObject<HTMLDivElement>;
}

export interface SetImgWidth {
  type: "SET_IMG_WIDTH";
  imgWidth: number;
}

export type Actions = SetCurIdx | SetRef | SetImgWidth;
