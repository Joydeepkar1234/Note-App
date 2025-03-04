
import React from 'react';
import { NotesProvider, useNotes } from './Components/NotesContext';
import NoteForm from './Components/NoteForm';
import NoteList from './Components/NoteList';
import './App.css';
const AppContent: React.FC = () => {
  const {
    notes,
    addNote,
    deleteNote,
    editNote,
    searchQuery,
    updateSearchQuery,
    editingNote,
  } = useNotes();
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
        className="search-input"
      />
      <NoteForm addNote={addNote} editingNote={editingNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
};
const App: React.FC = () => (
  <NotesProvider>
    <AppContent />
  </NotesProvider>
);
export default App;