import React, { useState } from "react";
import Note from "./Note";

import "./DisplayNotes.css";

const DisplayNotes = (props) => {
  const notes = props.db.notes;

  // generating the HTML for notes
  let notesHTML = [];

  for (const key of Object.keys(notes)) {
    // console.log(`${key} : ${notes[key]}`);
    const note = notes[key];

    const newHTML = <Note key={key} note={note} />;

    notesHTML.push(newHTML);
  }

  return <div className="notes-grid">{notesHTML}</div>;
};

export default DisplayNotes;
