import React, { useState } from "react";
import NoteModal from "./NoteModal";

function Note(props) {
  const [modalVisibility, setModalVisibility] = useState(false);

  // display note details in modal
  const showNoteModal = () => {
    setModalVisibility(true);
  };

  return (
    <div className="note-card">
      <NoteModal
        note={props.note}
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
      />
      <div className="note-card__title">{props.note.title}</div>
      <div className="note-card__body">
        {props.note.body.slice(0, 50) + "..."}
      </div>
      <button className="view-note" onClick={showNoteModal}>
        View
      </button>
      <div className="note-card__footer">
        <div className="note-card-footer__datetime">12 Dec 2020</div>
        <div className="note-card-footer__tag">Tag</div>
      </div>
    </div>
  );
}

export default Note;
