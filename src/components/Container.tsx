const Container = ({
  children,
  classNames,
}: {
  children?: React.ReactNode;
  classNames?: string;
}) => {
  return <section className={"container " + classNames}>{children}</section>;
};

export default Container;
