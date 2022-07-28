import React, { Component } from "react";
import { ReactComponent } from "react-formio";
import ReactDOM from "react-dom";
import settingsForm from "./MuStepper.settingsForm";
import Tooltip from "@material-ui/core/Tooltip";
import uuid from "react-uuid";
import "./MuStepper.css";
import MuiStepper from "./components/MuiStepper";
import { createGenerateClassName } from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Configure JSS //for rtl support
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator. //for rtl support
const generateClassName = createGenerateClassName();

export const MaterialUIStepper = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  componentDidMount() {
    const { me } = this.props;

    if (me.inDataGrid) {
      this.setValue(me.data[me.component.key]);
    } else {
      this.props.onChange(this.state.value);
    }
  }

  setValue = (value) => {
    const state = this.state;
    this.setState({ ...state, value }, () => {
      this.props.onChange(this.state.value);
    });
  };

  render() {
    const { component, disabled, me, t } = this.props;

    return (
      <div className={`${this.state.inline ? "muHorizontalStepper" : "muVerticalStepper"}`} id={uuid()}>
        <Tooltip title={component.tooltip && ""} aria-label="text field" placement="top-start">
          {component && (
            <StylesProvider jss={jss} generateClassName={generateClassName}>
              <MuiThemeProvider theme={createMuiTheme({ direction: component.rtl ? "rtl" : "ltr",})}>
                <MuiStepper component={component} disabled={disabled} setValue={this.setValue} me={me} t={t}
                  value={this.state.value || { errorStep: {}, completedStep: {}, activeStep: 0 } }
                />
              </MuiThemeProvider>
            </StylesProvider>
          )}
        </Tooltip>
      </div>
    );
  }
};

export default class MuStepper extends ReactComponent {
  static get builderInfo() {
    return {
      icon: "terminal",
      title: "MU Stepper",
      group: "material_ui",
      documentation: "",
      weight: 0,
      schema: MuStepper.schema(),
    };
  }

  static schema() {
    return ReactComponent.schema({
      type: "muStepper",
      label: "",
    });
  }

  static editForm = settingsForm;
  stepperInput = React.createRef();

  attachReact(element) {
    return ReactDOM.render(
      <MaterialUIStepper
        disabled={this.disabled}
        component={this.component}
        onChange={this.updateValue}
        ref={this.stepperInput}
        me={this}
        t={(title) => {
          return this.i18next.t(title);
        }}
        value={
          this.component.logic && this.component.logic.length > 0 ? this.dataValue || {} : this.component.defaultValue || {}
        }
      />,
      element
    );
  }

  detachReact(element) {
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }

  setValue(value) {
    let newValue = value || {};
    if (this.stepperInput != null && this.stepperInput.current != null) {
      this.stepperInput.current.setValue(newValue);
    }
  }
}
