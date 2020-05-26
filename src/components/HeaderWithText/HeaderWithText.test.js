import React from 'react';
import { shallow } from 'enzyme';

import HeaderWithText from "./HeaderWithText"

describe('HeaderWithText', () => {

  const defaultProps = {
    header: "Test Header",
    text: "Test Text"
  }

  it('renders header to page', () => {
    const wrapper = shallow(<HeaderWithText {...defaultProps} />);
    const header = wrapper.find('[data-test="header"]');
    
    expect(header.length).toBe(1);
    expect(header.text()).toBe(defaultProps.header)
  });
  it('renders text to page', () => {
    const wrapper = shallow(<HeaderWithText {...defaultProps}/>);
    const text = wrapper.find('[data-test="text"]');
    
    expect(text.length).toBe(1);
    expect(text.text()).toBe(defaultProps.text)
  });
});
