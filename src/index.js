import React from 'react';
import ReactDOM from 'react-dom';
import StoryContainer from './components/StoryPage/StoryContainer';

const story = [
  'middle', 'beginning'
]

ReactDOM.render(
  <StoryContainer story={story} />, document.getElementById('root')
)
