import React from "react";
import { Button } from "@material-ui/core";

const HandlerButtons = ({ inlineStepper, completedStepHandler, unCompletedStepHandler, inActiveHandler, errorStepHandler, catchErrorStepHandler, rtl, t }) => {
  const flexDirection = () => {
    if (rtl) {
      return "start";
    } else {
      return "end";
    }
  };
  return (
    <div
      className={
        inlineStepper ? "d-flex justify-content-center" : `d-flex flex-column justify-content-center align-items-${flexDirection()}`
      }
    >
      <Button className="m-1" variant="contained" color="primary" onClick={() => completedStepHandler()}>{t("COMPLETED")}</Button>
      <Button className="m-1" variant="contained" onClick={() => unCompletedStepHandler()}>{t("UNCOMPLETED")}</Button>
      <Button className="m-1" variant="contained" onClick={() => inActiveHandler()}>{t("INACTIVE")}</Button>
      <Button className="m-1" variant="contained" color="secondary" onClick={() => errorStepHandler()}>{t("ERROR STEP")}</Button>
      <Button className="m-1" variant="contained" color="secondary" onClick={() => catchErrorStepHandler()}>{t("CATCH ERROR STEP")}</Button>
    </div>
  );
};

export default HandlerButtons;
