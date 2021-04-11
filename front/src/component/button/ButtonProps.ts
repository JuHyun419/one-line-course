import { EButtonType } from "./EButtonType";
import { EButtonSize } from "./EButtonSize";

export interface ButtonProps {
  btnSize?: EButtonSize | undefined;
  btnType?: EButtonType | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void | undefined;
  children?: any | undefined;
}
