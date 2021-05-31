import React, { useState } from "react";
import AddNote from "./AddNote/AddNote";
import DisplayNotes from "./DisplayNotes/DisplayNotes";
import FilterNotes from "./FilterNotes/FilterNotes";
import NotesMenu from "./NotesMenu/NotesMenu";

import "./NotesContainer.css";

const NotesContainer = (props) => {
  return (
    <div class="notes-app-container">
      <div className="header-container">
        <h1>Google Keep Clone</h1>
      </div>
      <div class="menu-container">
        <NotesMenu />
      </div>
      <div class="add-notes-container">
        <AddNote />
      </div>
      <div class="filter-notes-container">
        <FilterNotes />
      </div>
      <div class="display-notes-container">
        <DisplayNotes />
      </div>
    </div>
  );
};

export default NotesContainer;
