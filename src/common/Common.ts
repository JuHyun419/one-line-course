export const asyncTryCatch = <Props, Result>({
  tryer,
  catcher,
}: {
  tryer: (props: Props) => Result;
  catcher: (props: Props, message: string) => Result;
}) => async (props: Props) => {
  try {
    return tryer(props);
  } catch (err) {
    return catcher(props, err.message);
  }
};
