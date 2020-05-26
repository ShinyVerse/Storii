import React from 'react';
import { shallow } from 'enzyme';

import { Form } from "./Form"

describe('Form', () => {
  const onSubmitSpy = jest.fn()
  const defaultProps = {
    handleSubmit: onSubmitSpy,
    initState: {}
  }
  it.only('renders form container to page', () => {
    const wrapper = shallow(<Form {...defaultProps}>{() => {}}</Form>);
    const formContainer = wrapper.find('form');

    expect(formContainer.length).toBe(1)
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