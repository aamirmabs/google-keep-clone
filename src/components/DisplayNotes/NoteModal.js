import React, { useState } from "react";

function NoteModal(props) {
  // <NoteModal
  //   note={props.note}
  //   visibility={modalVisibility}
  //   setVisibility={setModalVisibility}
  // />

  const modalVisibleClass = `note-modal`;
  const modalInvisibleClass = `note-modal note-modal__hidden`;

  const closeModalHandler = (e) => {
    props.setVisibility(false);
  };

  return (
    <div className={props.visibility ? modalVisibleClass : modalInvisibleClass}>
      <div className="modal-content">
        <span className="close" onClick={closeModalHandler}>
          &times;
        </span>
        <div className="note-modal__heading">{props.note.title}</div>
        <div className="note-modal__details">{props.note.date}</div>
        <div className="note-modal__body">{props.note.body}</div>
        <div className="note-modal__footer">
          <button>Delete Note</button>
          <button>Edit Note</button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
