import React from 'react';
import StoryEntry from './StoryEntry';
import './StoryContainer.scss'

export default function StoryContainer({story}) {

  return (
    <ul id='story' className='scrollbar'>
      {story.map((entry, index) => {
        return <StoryEntry key={index} index={index} entry={entry} />
      })}
    </ul>
  )
}
