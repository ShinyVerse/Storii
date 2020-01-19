import React from 'react';
import ReactDOM from 'react-dom';
import StoryContainer from './components/StoryPage/StoryContainer';
import StoryEntry from './components/StoryPage/EntryForm'

const story = [
  'middle', 'beginning'
]

ReactDOM.render(
  <StoryEntry onSubmit={(entry) => {alert(entry)}}/>, document.getElementById('root')
)
