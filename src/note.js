// Note.js

import React from 'react';

const Note = () => {
  return (
    <div className="note">
      <input type="text" className="note__title" placeholder="Note Title" />
      <textarea
        className="note__description"
        placeholder="Note description..."
      ></textarea>
      <div className="note__delete">X</div>
    </div>
  );
};

export default Note;
NotesList.js:
jsx
Copy code
// NotesList.js

import React from 'react';
import Note from './Note';

const NotesList = () => {
  return (
    <div className="notes-list">
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NotesList;
App.js (where you'll import and render the Header and NotesList components):
jsx
Copy code
// App.js

import React from 'react';
import Header from './Header';
import NotesList from './NotesList';

const App = () => {
  return (
    <div className="app">
      <Header />
      <NotesList />
    </div>
  );
};

export default App;
Now you have separate components for the header, note, and notes list. In the NotesList component, we've imported and rendered the Note component three times to replace the static sticky notes. Finally, in the App component, we import and render the Header and NotesList components.





