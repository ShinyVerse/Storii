import React from 'react';
import { shallow, mount } from 'enzyme';

import { Form } from "./Form"

describe('Form', () => {
  const onSubmitSpy = jest.fn()
  const defaultProps = {
    handleSubmit: onSubmitSpy,
    initState: {
      testInput: ""
    }
  }
  it('renders form container to page', () => {
    const wrapper = shallow(
      <Form {...defaultProps}>
        {() => {}}
      </Form>);
    const formElement = wrapper.find('form');

    expect(formElement.length).toBe(1)
  });

  it('can render children', () => {
    const wrapper = shallow(
      <Form {...defaultProps}>
        {() => {
          return <div data-test="test">hello</div>
        }}
      </Form>);

    const divElement = wrapper.find('[data-test="test"]');

    expect(divElement.length).toBe(1);
    expect(divElement.text()).toBe("hello");
  });

  it('can trigger onChange event ', () => {

    const wrapper = shallow(
      <Form {...defaultProps}>
        {({state, onChange}) => {
          return <input 
          data-test="input"
          name="testInput"
          value={state.div || "hello"}
          onChange={onChange}
         />
        }}
      </Form>);

    let inputElement = wrapper.find('[data-test="input"]');
    
    inputElement.simulate('change', {
      target: { value: 'byebye' }
    })
    wrapper.update();

    inputElement = wrapper.find('[data-test="input"]');

    expect(inputElement.text()).toBe("hello");
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