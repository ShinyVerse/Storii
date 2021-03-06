import React from "react";
import { shallow } from "enzyme";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("displays when alert has a message", () => {
    const wrapper = shallow(<Alert alert={{ message: "Alert!" }} />);
    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.length).toBe(1);
    expect(alertElement.text()).toBe("Alert!");
  });

  it("doesn't display when alert.message is null", () => {
    const wrapper = shallow(<Alert alert={{ message: null }} />);
    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.length).toBe(0);
  });
  it("doesn't display when alert.message is null", () => {
    const wrapper = shallow(<Alert alert={{ message: null }} />);
    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.length).toBe(0);
  });

  it("has the default alert color of danger type", () => {
    const type = "danger";
    const wrapper = shallow(<Alert alert={{ message: "Alert!" }} />);

    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.hasClass(type)).toBe(true);
  });

  it("can set the color of the alert based on type", () => {
    const type = "event";
    const wrapper = shallow(
      <Alert alert={{ message: "Alert!", type: type }} />,
    );

    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.hasClass(type)).toBe(true);
  });
});
