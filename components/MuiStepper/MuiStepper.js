import React, { useEffect, useState } from "react";
import {
  Step, StepButton, StepConnector, Stepper, Tooltip, Zoom, createMuiTheme, MuiThemeProvider, Typography, StepLabel,
} from "@material-ui/core";
import "font-awesome/css/font-awesome.min.css";
import { pickColorStep, classStepConnector, colorIconStep, setCompletedValue, backgroundColorIconStep, textHighLight } from "./utils/utils";
import "./MuiStepper.css";
import HandlerButtons from "./HandlerButtons";
import CustomizeIcon from "./CustomizeIcon";

const MuiStepper = (props) => {
  // props
  const { disabled, value, setValue, t } = props;
  const { show, dataSrc, stepGridValues, stepComponentData, stepGridCustomValues, inline, colorStep, rtl, alternativeLabel, descriptionTooltip, tooltipPosition,
  } = props.component;
  const { data } = props.me;

  // states whose data comes from the parent component
  const [steps, setSteps] = useState([]);
  const [inlineStepper, setInlineStepper] = useState(true);

  //states whose data is stored in the parent component
  const [completedStep, setCompletedStep] = useState(value.completedStep);
  const [activeStep, setActiveStep] = useState(value.activeStep);
  const [customIcon, setCustomIcon] = useState(false);
  const [errorStep, setErrorStep] = useState(value.errorStep);

  // for setSteps in normal mode
  const setStepsNormal = () => {
    // normal stepper with grid data
    if (!show && dataSrc === "stepGridValues") {
      setCustomIcon(false);
      setSteps(stepGridValues || []);
    }
    // normal stepper with component data
    if (!show && dataSrc === "stepComponentData") {
      setCustomIcon(false);
      setSteps(data[stepComponentData] || []);
    }
  };

  // for setSteps in customize mode
  const setStepsCustomize = () => {
    // customize stepper with grid data
    if (show && dataSrc === "stepGridValues") {
      setCustomIcon(true);
      setSteps(stepGridCustomValues || []);
      setActiveStep(-1);
    }

    // customize stepper with component data
    if (show && dataSrc === "stepComponentData") {
      setCustomIcon(true);
      setSteps(data[stepComponentData] || []);
      setActiveStep(-1);
    }
  };

  // component did mount
  useEffect(() => {
    setStepsNormal();
    setStepsCustomize();
    setInlineStepper(inline);
  }, []);

  // handlers
  const completedStepHandler = () => {
    const newCompletedStep = completedStep || value.completedStep || {};
    newCompletedStep[activeStep || value.activeStep || 0] = true;
    setCompletedStep(newCompletedStep);
    setValue({ ...value, completedStep: newCompletedStep });
  };

  const unCompletedStepHandler = () => {
    const newCompletedStep = completedStep || value.completedStep || {};
    newCompletedStep[activeStep || value.activeStep || 0] = false;
    setCompletedStep(newCompletedStep);
    setValue({ ...value, completedStep: newCompletedStep });
  };

  const activeHandler = (activatedStep) => {
    setActiveStep(activatedStep);
    setValue({ ...value, activeStep: activatedStep });
  };

  const inActiveHandler = () => {
    setActiveStep(-1);
    setValue({ ...value, activeStep: -1 });
  };

  const errorStepHandler = () => {
    const newErrorStep = errorStep || value.errorStep || {};
    newErrorStep[activeStep || value.activeStep || 0] = true;
    setErrorStep(newErrorStep);
    setValue({ ...value, errorStep: newErrorStep });
  };

  const catchErrorStepHandler = () => {
    const newErrorStep = errorStep || value.errorStep || {};
    newErrorStep[activeStep || value.activeStep || 0] = false;
    setErrorStep(newErrorStep);
    setValue({ ...value, errorStep: newErrorStep });
  };

  const stepperDirection = rtl ? "rtl" : "ltr";

  return (
    <div>
      <MuiThemeProvider
        theme={createMuiTheme({
          direction: stepperDirection, palette: { grey: { dark: "#000" }, primary: { main: pickColorStep(colorStep).backGroundColor } }
        })}
      >
        <Stepper
          alternativeLabel={alternativeLabel} nonLinear activeStep={activeStep || value.activeStep} orientation={inlineStepper ? "horizontal" : "vertical"}
          style={{ direction: stepperDirection }} className="text-center" connector={<StepConnector className={classStepConnector(inlineStepper, customIcon)} />}
        >
          {steps &&
            steps.map((item, index) => (
              <Tooltip title={descriptionTooltip ? item.description : ""} TransitionComponent={Zoom} key={index} placement={tooltipPosition} >
                <Step disabled={disabled} style={{ fontSize: "10px !important" }}>
                  {customIcon ? (
                    <StepButton
                      onClick={() => activeHandler(index)}
                      completed={(completedStep && completedStep[index]) || (value.completedStep && value.completedStep[index]) || false}
                      icon={
                        <div className={"circleStep"}
                          style={{
                            backgroundColor: backgroundColorIconStep(index, activeStep, completedStep, errorStep, value, colorStep),
                            color: colorIconStep(index, activeStep, completedStep || value.completedStep, colorStep),
                          }} >
                          <CustomizeIcon
                            completed={completedStep || value.completedStep || {}} errorStep={errorStep || value.errorStep || {}}
                            classIcon={item.classIcon} index={index} />
                        </div>
                      }
                    >
                      <Typography variant="body1"><span className={textHighLight(index, activeStep, completedStep, errorStep, value)}>{item.label}</span></Typography>
                    </StepButton>
                  ) : (
                    <StepButton onClick={() => activeHandler(index)} completed={setCompletedValue(index, completedStep || value.completedStep)}>
                      <StepLabel error={(errorStep && errorStep[index]) || (value.errorStep && value.errorStep[index]) || false}> {item.label} </StepLabel>
                    </StepButton>
                  )}
                </Step>
              </Tooltip>
            ))}
        </Stepper>
      </MuiThemeProvider>
      {/* buttons for handlers */}
      {disabled === false && (
        <HandlerButtons inlineStepper={inlineStepper} completedStepHandler={completedStepHandler} unCompletedStepHandler={unCompletedStepHandler} t={t}
          inActiveHandler={inActiveHandler} errorStepHandler={errorStepHandler} catchErrorStepHandler={catchErrorStepHandler} rtl={rtl} />
      )}
    </div>
  );
};

export default MuiStepper;