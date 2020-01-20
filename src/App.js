import React, { useState } from 'react';
import StoryContainer from './components/StoryPage/StoryContainer';
import EntryForm from './components/StoryPage/EntryForm';
import './App.scss'

export default function App() {
  let [story, updateStory] = useState([
    'middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning',
    'middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning','middle', 'beginning',
  ])

  const addEntryToStory = (entry) => {
    updateStory([...story, entry]);
  }

  return (
    <div id='app'>
      <StoryContainer story={story}/>
      <EntryForm onSubmit={(entry) => {addEntryToStory(entry)} }/>
    </div>
  )
}
