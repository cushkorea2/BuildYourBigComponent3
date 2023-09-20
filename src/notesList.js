import React from 'react';
import Note from './Note';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note
          key={note.id}
          title={note.title}
          description={note.description}
        />
      ))}
    </div>
  );
};

export default NotesList;
Now, each Note component will receive the title and description props from the mapped notes array in the NotesList component.





