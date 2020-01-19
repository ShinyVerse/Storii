import React, { useState } from 'react';

export default function EntryForm({onSubmit}) {
  let [entry, setEntry] = useState("pickles");

  const handleChange = ({target}) => {
    setEntry(target.value);
  }

  return (
    <div>
      <input
        id="entry-form"
        name="entry-form"
        onChange={handleChange}
        value={entry}
      ></input>
      <input
        type='button'
        id="entry-form-button"
        value='add'
        onClick={() => onSubmit(entry)}
      ></input>
    </div>
  )
}
