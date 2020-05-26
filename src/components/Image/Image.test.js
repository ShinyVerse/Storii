import React from 'react';
import { shallow } from 'enzyme';

import {Image} from "./Image"

describe('Image', () => {
  let defaultProps;
  const DEFAULT_IMAGE_TYPE = 'avatar';

  beforeEach(() => {
    defaultProps = {
      src: './path/to/image',
      type: 'long',
      alt: 'description'
    }
  })

  it('renders to the page', () => {
    const wrapper = shallow(<Image  {...defaultProps} />);
    const image = wrapper.find('[data-test="image"]');

    expect(image.length).toBe(1);
    expect(image.prop("src")).toBe(defaultProps.src);
    expect(image.prop("alt")).toBe(defaultProps.alt);
    expect(image.hasClass(defaultProps.type)).toBe(true);
  });  

  it('renders default size if no type given', () => {
    delete defaultProps.type;

    const wrapper = shallow(<Image  {...defaultProps} />);
    const image = wrapper.find('[data-test="image"]');

    expect(image.hasClass(DEFAULT_IMAGE_TYPE)).toBe(true);
  }); 

});
