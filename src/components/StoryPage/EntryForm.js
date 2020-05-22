import React, { useState } from 'react';
import './EntryForm.scss';

export default function EntryForm({onSubmit}) {
  let [entry, setEntry] = useState("");

  const handleChange = ({target}) => {
    setEntry(target.value);
  }

  return (
    <div id='entry-form-component'>
      <textarea
        id="entry-form"
        name="entry-form"
        onChange={handleChange}
        value={entry}
      ></textarea>
      <input
        type='button'
        id="entry-form-button"
        value='add'
        onClick={() => onSubmit(entry)}
      ></input>
    </div>
  )
}
