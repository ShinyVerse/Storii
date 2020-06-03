import React from "react";
import { shallow, mount } from "enzyme";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("displays when alert has a message", () => {
    const wrapper = shallow(<Alert props={{ alert: { message: "Alert!" } }} />);
    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.length).toBe(1);
  });

  it("doesn't display when alert.message is null", () => {
    const wrapper = shallow(<Alert props={{ alert: { message: null } }} />);
    const alertElement = wrapper.find('[data-test="alert"]');

    expect(alertElement.length).toBe(0);
  });
});
