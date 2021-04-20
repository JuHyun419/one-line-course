/**
 *
 */
enum EButtonSize {
  Small = "btn-small",
  Medium = "btn-medium",
  Large = "btn-large",
}

/**
 *
 */
enum EButtonType {
  Primary = "primary",
  Alt = "alt",
  Warning = "warning",
  Danger = "danger",
}

/**
 *
 */
interface TOnClick {
  (event?: React.MouseEvent<HTMLDivElement>, linkTo?: string): void;
}

/**
 * 
 */
enum EMenuMode {
  BeforeLogin,
  AfterLogin,
}

/**
 * 
 */
enum ENavType {
  Landing,
  SignIn,
  AfterLogin,
}

/**
 * Vertical: Separator located in vertical
 * Horizontal: in horizontal
 */
enum ESeparatorDirection {
  Vertical,
  Horizontal
}
