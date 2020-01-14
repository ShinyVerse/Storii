import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StoryContainer from './StoryContainer';

describe('StoryContainer', () => {
  test('renders a ul with id story to the page', () => {
    const wrapper = shallow(<StoryContainer />);

    expect(wrapper.find('#story').length).toBe(1);
  })

  test('snapshot for StoryContainer', () => {
    const tree = renderer
        .create(<StoryContainer />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
