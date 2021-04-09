import { EButtonType } from "./EButtonType";

export interface ButtonProps {
  width: number;
  height: number;
  btnType?: EButtonType | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | undefined;
  children?: any | undefined;
}
