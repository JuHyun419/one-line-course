export const joinClasses = (...classNames: Array<string>): string =>
  classNames.reduce((acc: string, cur: string) => `${acc} ${cur}`, "").trim();
