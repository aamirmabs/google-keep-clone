import React, { useState } from "react";
import AddNote from "./AddNote/AddNote";
import DisplayNotes from "./DisplayNotes/DisplayNotes";
import FilterNotes from "./FilterNotes/FilterNotes";
import NotesMenu from "./NotesMenu/NotesMenu";

import notesDB from "./NotesDB";
import "./NotesContainer.css";

const NotesContainer = (props) => {
  // state management
  const [filteredNotes, setFilteredNotes] = useState(notesDB);

  const [tagsArray, setTagsArray] = useState(notesDB.tags);

  // event handling

  return (
    <div className="notes-app-container">
      <div className="header-container">
        <h1>Google Keep Clone</h1>
      </div>
      <div className="menu-container">
        <NotesMenu />
      </div>
      <div className="add-notes-container">
        <AddNote />
      </div>
      <div className="filter-notes-container">
        <FilterNotes tagsDB={tagsArray} resetTagsFilter={setTagsArray} />
      </div>
      <div className="display-notes-container">
        <DisplayNotes db={filteredNotes} />
      </div>
    </div>
  );
};

export default NotesContainer;
