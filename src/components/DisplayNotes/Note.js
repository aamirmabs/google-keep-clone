import React from "react";

function Note(props) {
  return (
    <div className="note-card">
      <div className="note-card__title">{props.note.title}</div>
      <div className="note-card__body">{props.note.body}</div>
      <div className="note-card__footer">
        <div className="note-card-footer__datetime">12 Dec 2020</div>
        <div className="note-card-footer__tag">Tag</div>
      </div>
    </div>
  );
}

export default Note;
