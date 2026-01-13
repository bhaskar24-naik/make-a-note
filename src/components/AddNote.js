import React from 'react';
import { useState } from 'react';
const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const [noteColor, setNoteColor] = useState('#fef68a');
  const characterLimit = 200;
  
  const colorOptions = [
    '#fef68a',
    '#ff6b6b',
    '#4ecdc4',
    '#ffe66d',
    '#a8e6cf',
    '#ffd3b6',
    '#c7b3ff'
  ];

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >=0){
    setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
        handleAddNote(noteText, noteColor)
        setNoteText('');
        setNoteColor('#fef68a');
    }
  };

  return(<div className="note new" style={{ backgroundColor: noteColor }}>
    <textarea 
    rows="8" 
    cols="10" 
    placeholder="Type to add a note"
    value={noteText}
    onChange={handleChange}
    style={{ backgroundColor: noteColor }}
    ></textarea>
    <div className="note-footer">
      <div className="color-picker">
        {colorOptions.map((color) => (
          <button
            key={color}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => setNoteColor(color)}
            title={color}
            aria-label={`Select color ${color}`}
          />
        ))}
      </div>
      <small>{characterLimit - noteText.length} Remaining</small>
      <button className="save" onClick={handleSaveClick}>Save</button>
    </div>
  </div>
  );
};
export default AddNote;