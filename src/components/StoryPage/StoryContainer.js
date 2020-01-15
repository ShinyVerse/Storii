import React from 'react';
import StoryEntry from './StoryEntry';

export default function StoryContainer({story}) {

  return (
    <ul id='story'>
      {story.map((entry, index) => {
        return <StoryEntry key={index} index={index} entry={entry} />
      })}
    </ul>
  )
}
