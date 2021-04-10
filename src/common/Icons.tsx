import { joinClasses } from "./StyleHelper";

class Icons {
  static GridIcon = () => <i className={joinClasses("fas", "fa-th")}></i>;
  static SunIcon = () => <i className={joinClasses("fas", "fa-sun")}></i>;
  static MoonIcon = () => <i className={joinClasses("fas", "fa-moon")}></i>;
  static ListIcon = () => <i className={joinClasses("far", "fa-list-alt")}></i>;
}

export default Icons;
