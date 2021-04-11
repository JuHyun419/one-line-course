export const joinClasses = (...classNames: Array<string>): string =>
  classNames.reduce((acc: string, cur: string) => `${acc} ${cur}`, "").trim();

export const setCSSVariable = <T extends number | string>(
  varName: string,
  value: T
): void =>
  window.getComputedStyle(document.body).setProperty(varName, value.toString());
