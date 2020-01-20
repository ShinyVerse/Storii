import React, { useState } from 'react';
import StoryContainer from './components/StoryPage/StoryContainer';
import EntryForm from './components/StoryPage/EntryForm';

export default function App() {
  let [story, updateStory] = useState([
    'middle', 'beginning'
  ])

  const addEntryToStory = (entry) => {
    updateStory([...story, entry]);
  }

  return (
    <div>
      <StoryContainer story={story}/>
      <EntryForm onSubmit={(entry) => {addEntryToStory(entry)} }/>
    </div>
  )
}
