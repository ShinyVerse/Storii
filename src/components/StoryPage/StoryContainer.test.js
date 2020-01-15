import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StoryContainer from './StoryContainer';
import StoryEntry from './StoryEntry';

describe('StoryContainer', () => {
  const entries = [
    'middle',
    'beginning'
  ];

  test('renders a ul with id story to the page', () => {
    const wrapper = shallow(<StoryContainer story={entries}/>);

    expect(wrapper.find('#story').length).toBe(1);
    expect(wrapper.find(StoryEntry).length).toBe(2);
  })

  test('snapshot for StoryContainer', () => {
    const tree = renderer
        .create(<StoryContainer story={entries} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
