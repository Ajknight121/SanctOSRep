import "./notepad.css"

export default function Notepad({note, setNote}: {note:string, setNote: (value:string) => void}) {
  // const [notes, setNotes] = useState<Note[]>([])
  // const [currentText, setCurrentText] = useState<string>("")

  return (
    <div className='section notepad'>
      <div className='section-header'>NOTEPAD</div>
      <div className='section-container note-input-container'>
        <textarea 
          className='note-input' 
          value={note}
          placeholder='Leave a note!'
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </div>
  )
}