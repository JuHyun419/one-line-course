import { ENavType } from "../ENavType";

interface NavFactoryProps {
  navType: ENavType;
  history?: any;
  // TODO: Decorator -> @range(0, 4)
  highlightBtnIdx?: number;
}

export default NavFactoryProps;
