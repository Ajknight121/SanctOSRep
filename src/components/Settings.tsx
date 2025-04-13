import { useState } from 'react'
import "./notepad.css"

export default function Settings({avatar, setAvatar, bg, setBg}) {
  const [uiColor, setUiColor] = useState("white");

  const avatars = [
    {label: "girl 1", value: "girl1"},
    {label: "girl 2", value: "girl2"},
    {label: "none", value: "none"},
    {label: "him", value: "mrwashee"},
  ]
  const background = [
    { label: 'Day', value: "/images/blue-sky.png" },
    { label: 'aurora', value: "/images/aurora.jpg" },
    { label: 'Water', value: '/images/water.jpg' }
  ]

  const ui = [
    { label: 'White', value: 'white' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'OH GOD', value: 'bad' }
  ]

  return (
    <div className='section settings'>
      <div className='section-header'>SETTINGS</div>
      <div className='section-container'>
        <div>Avatar</div>
        <select value={avatar} onChange={(e) => setAvatar(e.target.value)}>
          {avatars.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
        <div>Background Image</div>
        <select value={bg} onChange={(e) => setBg(e.target.value)}>
          {background.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
        {/* <div>UI Color</div>
        <select value={uiColor} onChange={(e) => setUiColor(e.target.value)}>
          {ui.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select> */}
      </div>
    </div>
  )
}