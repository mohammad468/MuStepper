import React from "react";

const CustomizeIcon = ({ completed, errorStep, classIcon, index }) => {
  const showIconStep = () => {
    if (completed && completed[index]) {
      return <i className="fa fa-check" aria-hidden="true" />;
    } else if (errorStep && errorStep[index]) {
      return <i className="fa fa-warning" aria-hidden="true" />;
    } else if (classIcon === "") {
      return <span style={{ fontSize: "1.1rem" }}>{index + 1}</span>;
    } else {
      return <i className={classIcon} aria-hidden="true" />;
    }
  };
  return <div className="d-flex justify-content-center align-items-center">{showIconStep()}</div>;
};

export default CustomizeIcon;
