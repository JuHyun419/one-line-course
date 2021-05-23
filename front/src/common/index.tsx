import { getIconJSX, placeIconsJSXRandomly } from "./Icons";
import { joinClasses, setCSSVariable } from "./StyleHelper";
import { asyncTryCatch } from "./Common";

export const USERID_SESSION_STORAGE_KEY = "userID";
export const EXPIRES_IN_SESSION_STORAGE_KEY = "expiresIn";
export const PLATFORM_SESSION_STORAGE_KEY = "platform";

export { getIconJSX as getIcon, placeIconsJSXRandomly as placeIconsRandomly, joinClasses, setCSSVariable, asyncTryCatch };


