import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const NoteApp = () => {
   const [notes, dispatch] = useReducer(notesReducer, []) //within the reducer state will be notes
 
   useEffect(() => {
     try {
       console.log('fething data');
       const notes= JSON.parse(localStorage.getItem('notes'))
 
       if(notes) {
         dispatch({ type: 'POPULATE_NOTES', notes }) //shorthand for notes: notes
       }
       
     } catch (e) {
       // Do nothing if the JSON was invalid, just swallow the error
     }
   }, [])
 
   useEffect(() => {
     localStorage.setItem('notes', JSON.stringify(notes));
   }, [notes])
 
   return (
     <NotesContext.Provider value={ { notes, dispatch }}>
       <h1>Notes</h1>
         <NoteList/>
         <AddNoteForm/>
     </NotesContext.Provider>
   )
 }
 
 export { NoteApp as default }