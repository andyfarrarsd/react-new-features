import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const { dispatch } = useContext(NotesContext)

   const addNote = (e) => {
      e.preventDefault();
      dispatch({ type: 'ADD_NOTE', title, body })
      setTitle('');
      setBody('');
    }

   return (
   <div>
      <p>Add Note</p>
      <form onSubmit={addNote}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button>add note</button>
      </form>
   </div>
   )
}

export { AddNoteForm as default }