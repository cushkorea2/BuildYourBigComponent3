// App.js

import React, { useState } from "react";
import Header from "./Header";
import NotesList from "./NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: "eat",
      description: "reese peanut butter cups",
      doesMatchSearch: true
    },
    {
      id: 1,
      title: "sleep",
      description: "eight hours",
      doesMatchSearch: true
    },
    {
      id: 2,
      title: "study",
      description: "react components",
      doesMatchSearch: true
    }
  ]);

  const [searchText, setSearchText] = useState("");

  return (
    <div className="app">
      <Header searchText={searchText} />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
