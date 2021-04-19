import { ENavType } from "../ENavType";

interface NavFactoryProps {
  navType: ENavType;
  // TODO: Decorator -> @range(0, 4)
  imagePlacerRef?: React.RefObject<HTMLDivElement>;
  highlightBtnIdx?: number;
}

export default NavFactoryProps;
