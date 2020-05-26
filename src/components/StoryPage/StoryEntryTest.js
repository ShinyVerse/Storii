import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import StoryEntry from './StoryEntry';

describe.skip('StoryEntry', () => {
  const entry = 'something here';

  test('renders a ul with id story to the page', () => {
    const wrapper = shallow(<StoryEntry entry={entry}/>);
    const storyEntry = wrapper.find('.story-entry');
    expect(storyEntry.length).toBe(1);
    expect(storyEntry.text()).toEqual(entry);
  })
  //
  test('snapshot for StoryEntry', () => {
    const tree = renderer
        .create(<StoryEntry entry={entry} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
