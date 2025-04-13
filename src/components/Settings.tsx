import React, { useState } from 'react'
import "./notepad.css"

export default function Settings() {
  const [selectedTheme, setSelectedTheme] = useState('Day')
  const [uiColor, setUiColor] = useState("white");
  const background = [
    { label: 'Day', value: 'Day' },
    { label: 'Night', value: 'Night' },
    { label: 'Water', value: 'Water' }
  ]

  const ui = [
    { label: 'White', value: 'white' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'OH GOD', value: 'bad' }
  ]

  return (
    <div className='section settings'>
      <div className='section-header'>Settings</div>
      <div className='section-container'>
        <div>Background Image</div>
        <select value={selectedTheme} onChange={(e) => setSelectedTheme(e.target.value)}>
          {background.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
        <div>UI Color</div>
        <select value={uiColor} onChange={(e) => setUiColor(e.target.value)}>
          {ui.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}