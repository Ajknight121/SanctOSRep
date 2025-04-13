import React, { useState } from 'react'
import "./notepad.css"

type Note = {
  title: string;
  body: string;
}

export default function Notepad() {
  const [notes, setNotes] = useState<Note[]>([])
  const [currentText, setCurrentText] = useState<string>("")

  return (
    <div className='section notepad'>
      <div className='section-header'>Notepad</div>
      <div className='section-container note-input-container'>
        <textarea 
          className='note-input' 
          value={currentText}
          placeholder='Leave a note!'
          onChange={(e) => setCurrentText(e.target.value)}
        />
      </div>
    </div>
  )
}