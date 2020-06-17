import React from "react";
import { shallow } from "enzyme";

import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("should display login form by default", () => {
    const wrapper = shallow(<LandingPage />);
    const loginForm = wrapper.find('[data-test="loginForm"]');

    expect(loginForm.length).toBe(1);
  });
  it("should display register form when formType is set to register", () => {
    const wrapper = shallow(<LandingPage form="register" />);
    const registerForm = wrapper.find('[data-test="registerForm"]');

    expect(registerForm.length).toBe(1);
  });
  it("should display login form when formType is set to login", () => {
    const wrapper = shallow(<LandingPage form="login" />);
    const loginForm = wrapper.find('[data-test="loginForm"]');

    expect(loginForm.length).toBe(1);
  });
});
