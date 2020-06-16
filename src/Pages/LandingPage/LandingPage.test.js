import React from "react";
import { shallow } from "enzyme";

import { LandingPage } from "./LandingPage";

describe("LandingPage", () => {
  it("should display login form by default", () => {
    const wrapper = shallow(<LandingPage />);
    const loginForm = wrapper.find('[data-test="loginForm"]');

    expect(loginForm.length).toBe(1);
  });
  it("should display register form when clicking on register here link", () => {
    const wrapper = shallow(<LandingPage />);
    const toRegisterFormLink = wrapper.find('[data-test="toRegisterFormLink"]');

    toRegisterFormLink.simulate("click");

    const registerForm = wrapper.find('[data-test="registerForm"]');

    expect(registerForm.length).toBe(1);
  });
  it("should display login form when clicking on change form link twice", () => {
    const wrapper = shallow(<LandingPage />);
    const toRegisterFormLink = wrapper.find('[data-test="toRegisterFormLink"]');

    toRegisterFormLink.simulate("click");

    const toLoginFormLink = wrapper.find('[data-test="toLoginFormLink"]');

    toLoginFormLink.simulate("click");

    const loginForm = wrapper.find('[data-test="loginForm"]');

    expect(loginForm.length).toBe(1);
  });
});
