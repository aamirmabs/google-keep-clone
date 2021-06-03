import React, { useState } from "react";
import AddNote from "./AddNote/AddNote";
import DisplayNotes from "./DisplayNotes/DisplayNotes";
import FilterNotes from "./FilterNotes/FilterNotes";
import NotesMenu from "./NotesMenu/NotesMenu";

import notesDB from "./NotesDB";
import "./NotesContainer.css";

const NotesContainer = (props) => {
  // state management
  const [notes, setNotes] = useState(notesDB);
  const [filteredNotes, setFilteredNotes] = useState(notesDB.notes);
  const [tagsArray, setTagsArray] = useState(notesDB.tags);

  // event handlers
  const handleFilterTagClick = (e) => {
    // detect which filter is clicked
    console.log("Clicked");

    // generate a dynamic list of filtered notes
    // setFilteredNotes();
  };

  const getFilteredTag = (tag) => {
    if (tag === "All") {
      console.log("Tag 'All' clicked - Display all the notes");
    } else {
      console.log(`Tag '${tag}' clicked - Fetch appropriate notes and display`);
    }
  };

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
        <FilterNotes
          filteredTag={getFilteredTag}
          tagsDB={tagsArray}
          resetTagsFilter={setTagsArray}
        />
      </div>
      <div className="display-notes-container">
        <DisplayNotes db={filteredNotes} />
      </div>
    </div>
  );
};

export default NotesContainer;
