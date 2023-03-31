import React, { useState } from "react";
import Note from "./Note";

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    //const {notes}=props
    //console.log(notes)

    const addNote = (event) => {
        event.preventDefault()
        //console.log('button Clicked',event.target)

        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChanged = (event) => {
        //console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = (() => {
        if (showAll === true) {
            return notes
        }
        else {
            return notes.filter(x => x.important)
        }
    })()

    return (
        <div>
            <h1>Notes</h1>
            <button onClick={()=>setShowAll(!showAll)}>
                show {showAll?'important':'all'}                
            </button>
            <ul>
                {notesToShow.map((x) => {
                    console.log(x.id, x.content)
                    return (
                        <Note key={x.id} note={x} />
                    )
                })}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChanged} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}

export default App