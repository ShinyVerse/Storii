import React from 'react';
import './StoryEntry.scss'

export default function StoryEntry({entry, index}) {

  return <li className='story-entry'>{entry}</li>
}
