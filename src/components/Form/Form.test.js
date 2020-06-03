import React from "react";
import { shallow, mount } from "enzyme";

import { Form } from "./Form";

describe("Form", () => {
  const onSubmitSpy = jest.fn();
  let defaultProps;

  beforeEach(() => {
    jest.clearAllMocks();
    defaultProps = {
      handleSubmit: onSubmitSpy,
      initState: {},
    };
  });
  it("renders form container to page", () => {
    const wrapper = shallow(<Form {...defaultProps}>{() => {}}</Form>);
    const formElement = wrapper.find('[data-test="form"]');

    expect(formElement.length).toBe(1);
  });

  it("can render children", () => {
    const wrapper = shallow(
      <Form {...defaultProps}>
        {() => {
          return <div data-test="test">hello</div>;
        }}
      </Form>
    );

    const divElement = wrapper.find('[data-test="test"]');

    expect(divElement.length).toBe(1);
    expect(divElement.text()).toBe("hello");
  });

  it("can trigger onChange event on input", () => {
    defaultProps.initState.testInput = "";

    const wrapper = shallow(
      <Form {...defaultProps}>
        {({ state, onChange }) => {
          return (
            <input
              data-test="testInput"
              name="testInput"
              value={state.testInput || "hello"}
              onChange={onChange}
            />
          );
        }}
      </Form>
    );

    let inputElement = wrapper.find('[data-test="testInput"]');

    inputElement.simulate("change", {
      target: { name: "testInput", value: "CHANGED" },
    });

    inputElement = wrapper.find('[data-test="testInput"]');

    expect(inputElement.prop("value")).toBe("CHANGED");
  });

  it("can trigger onChange event with a dropdown", () => {
    defaultProps.initState.selection = "one";

    const selection = ["one", "two", "three"];
    const wrapper = shallow(
      <Form {...defaultProps}>
        {({ state, onChange }) => {
          return (
            <select
              value={state.selection}
              data-test="select"
              name="selection"
              onChange={onChange}
            >
              {selection.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        }}
      </Form>
    );

    let selectElement = wrapper.find('[data-test="select"]');

    selectElement.simulate("change", {
      target: { name: "selection", value: selection[1] },
    });

    selectElement = wrapper.find('[data-test="select"]');

    expect(selectElement.prop("value")).toBe("two");
  });

  it("can trigger onCheckBoxChange event with checkboxes", () => {
    defaultProps.initState.tags = [];

    const wrapper = shallow(
      <Form {...defaultProps}>
        {({ state, onCheckboxChange }) => {
          return (
            <input
              data-test="checkbox"
              name="fantasy"
              type="checkbox"
              belongsto="tags"
              onChange={onCheckboxChange}
            />
          );
        }}
      </Form>
    );

    const checkboxElement = wrapper.find('[data-test="checkbox"]');

    checkboxElement.simulate("change", {
      target: {
        name: "fantasy",
        checked: true,
        attributes: { belongsto: { value: "tags" } },
      },
    });

    const submitElement = wrapper.find('[data-test="submit"]');

    submitElement.simulate("click");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith({ tags: ["fantasy"] });
  });

  it("returns current state on submitting", () => {
    defaultProps.initState.testInput = "";

    const wrapper = shallow(
      <Form {...defaultProps}>
        {({ state, onChange }) => {
          return (
            <input
              data-test="testInput"
              name="testInput"
              value={state.testInput || "hello"}
              onChange={onChange}
            />
          );
        }}
      </Form>
    );

    const inputElement = wrapper.find('[data-test="testInput"]');

    inputElement.simulate("change", {
      target: { name: "testInput", value: "CHANGED" },
    });

    const submitElement = wrapper.find('[data-test="submit"]');

    submitElement.simulate("click");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledWith({ testInput: "CHANGED" });
  });
});

// Login/Regsiter form
// penname
// email
// password
// password2

// new Storii form
// title
// description
// mainGenre (DROPDOWN)
// tags (CHECKBOX)
