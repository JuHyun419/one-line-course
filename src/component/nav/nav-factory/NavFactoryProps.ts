import { ENavType } from "../ENavType";

interface NavFactoryProps {
  navType: ENavType;
  // TODO: Decorator -> @range(0, 4)
  carouselRef?: React.RefObject<HTMLDivElement>;
  highlightBtnIdx?: number;
}

export default NavFactoryProps;
