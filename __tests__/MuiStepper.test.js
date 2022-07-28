import React from "react";
import { mount, shallow } from "enzyme";
import MaterialUIStepper from "../MuStepper";

it("hello MuStepper Test", () => {
  // const component = mount(<MaterialUIStepper disabled={true} value={{ completed: { 0: true, 1: true } }} />);
  // console.log(component.debug());
  const wrapper = shallow(<MaterialUIStepper />);
  console.log(wrapper.debug());
});
