// for pick color step
export const pickColorStep = (colorStep) => {
  switch (colorStep) {
    case "#3B5998":
      return { backGroundColor: "#3B5998", color: "#ffffff" };
    case "#1976d2":
      return { backGroundColor: "#1976d2", color: "#ffffff" };
    case "#115293":
      return { backGroundColor: "#115293", color: "#ffffff" };
    case "#4791db":
      return { backGroundColor: "#4791db", color: "#000000" };
    case "#dc004e":
      return { backGroundColor: "#dc004e", color: "#ffffff" };
    case "#9a0036":
      return { backGroundColor: "#9a0036", color: "#ffffff" };
    case "#e33371":
      return { backGroundColor: "#e33371", color: "#000000" };
    case "#f44336":
      return { backGroundColor: "#f44336", color: "#000000" };
    case "#d32f2f":
      return { backGroundColor: "#d32f2f", color: "#ffffff" };
    case "#e57373":
      return { backGroundColor: "#e57373", color: "#000000" };
    case "#ff9800":
      return { backGroundColor: "#ff9800", color: "#000000" };
    case "#f57c00":
      return { backGroundColor: "#f57c00", color: "#000000" };
    case "#ffb74d":
      return { backGroundColor: "#ffb74d", color: "#000000" };
    case "#2196f3":
      return { backGroundColor: "#2196f3", color: "#000000" };
    case "#64b5f6":
      return { backGroundColor: "#64b5f6", color: "#ffffff" };
    case "#4caf50":
      return { backGroundColor: "#4caf50", color: "#000000" };
    case "#388e3c":
      return { backGroundColor: "#388e3c", color: "#ffffff" };
    case "#81c784":
      return { backGroundColor: "#81c784", color: "#ffffff" };
    default:
      return { backGroundColor: "#3B5998", color: "#ffffff" };
  }
};

// for set color in different status
export const colorIconStep = (indexStep, activeStep, completedStep, colorStep) => {
  if (indexStep === activeStep || (completedStep && completedStep[indexStep])) {
    return pickColorStep(colorStep).color;
  } else {
    return "#ffffff";
  }
};

// for set class in different status
export const classStepConnector = (inlineStepper, customIcon) => {
  if (!inlineStepper) {
    return "mt-2 me-1";
  } else if (customIcon) {
    return "mt-1";
  } else {
    return "";
  }
};

// for set completed value in completed props on buttonStep component
export const setCompletedValue = (indexStep, completed) => {
  if (completed) {
    return completed[indexStep];
  } else {
    return false;
  }
};

// for set background color in different status
export const backgroundColorIconStep = (indexStep, activeStep, completedStep, errorStep, value, colorStep) => {
  if (
    indexStep === activeStep ||
    indexStep === value.activeStep ||
    (completedStep && completedStep[indexStep]) ||
    (value.completedStep && value.completedStep[indexStep])
  ) {
    return pickColorStep(colorStep).backGroundColor;
  } else if ((errorStep && errorStep[indexStep]) || (value.errorStep && value.errorStep[indexStep])) {
    return "#d32f2f";
  } else {
    return "#9e9e9e";
  }
};

//for color text in activeStep && completed && errorStep in customize mode
export const textHighLight = (index, activeStep, completed, errorStep, value) => {
  if (
    activeStep === index ||
    value.activeStep === index ||
    (completed && completed[index]) ||
    (value.completed && value.completed[index]) ||
    (errorStep && errorStep[index]) ||
    (value.errorStep && value.errorStep[index])
  ) {
    return "textHighLight";
  } else {
    return "";
  }
};
