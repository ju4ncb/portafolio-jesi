import { useEffect, useState } from "react";

const Container = ({
  children,
  withFloatingContainer,
  noMargin,
  marginTop75,
}: {
  children?: React.ReactNode;
  withFloatingContainer?: boolean;
  noMargin?: boolean;
  marginTop75?: boolean;
}) => {
  const [classes, setClasses] = useState<string>("cotainer");
  useEffect(() => {
    let newClasses = ["container"];
    newClasses.push(noMargin ? "no-margin" : "");
    newClasses.push(marginTop75 ? "margin-top-75" : "");
    newClasses.filter((item) => item !== "");
    setClasses(newClasses.join(" "));
  }, []);
  if (withFloatingContainer) {
    return (
      <section className={classes}>
        <div className="floating-container">{children}</div>
      </section>
    );
  }
  return <section className={classes}>{children}</section>;
};

export default Container;
