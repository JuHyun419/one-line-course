import { EButtonType } from "./EButtonType";
import { EButtonSize } from "./EButtonSize";

// export type TNavLinkToAndExact = [string, boolean];
// export const isTNavLinkToAndExact = (
//   comparee: any
// ): comparee is TNavLinkToAndExact =>
//   typeof (comparee as TNavLinkToAndExact)[0] === "string" &&
//   typeof (comparee as TNavLinkToAndExact)[1] === "boolean";

export interface TOnClick {
  (event?: React.MouseEvent<HTMLDivElement>, linkTo?: string): void;
}

interface ButtonProps {
  btnSize?: EButtonSize | undefined;
  btnType?: EButtonType | undefined;
  highlight ?: boolean;
  onClick?: TOnClick | undefined;
  children?: any | undefined;
}

export default ButtonProps;
