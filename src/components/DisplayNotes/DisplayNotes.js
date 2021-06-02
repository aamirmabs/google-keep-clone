import React, { useState } from "react";

import "./DisplayNotes.css";

const DisplayNotes = (props) => {
  const notes = props.db.notes;

  // generating the HTML for notes
  let notesHTML = [];

  for (const key of Object.keys(notes)) {
    console.log(`${key} : ${notes[key]}`);
    const note = notes[key];

    const newHTML = (
      <div className="note-card">
        <div className="note-card__title" key={key}>
          {note.title}
        </div>
        <div className="note-card__body">{note.body}</div>
        <div className="note-card__footer">
          <div className="note-card-footer__datetime">12 Dec 2020</div>
          <div className="note-card-footer__tag">Tag</div>
        </div>
      </div>
    );

    notesHTML.push(newHTML);
  }

  return <div className="notes-grid">{notesHTML}</div>;
};

export default DisplayNotes;
