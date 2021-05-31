import React, { useState } from "react";

import "./DisplayNotes.css";

const DisplayNotes = (props) => {
  return (
    <div className="notes-grid">
      <div className="note-card">
        <div className="note-card__title">Note Title</div>
        <div className="note-card__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="note-card__footer">
          <div className="note-card-footer__datetime">12 Dec 2020</div>
          <div className="note-card-footer__tag">Tag</div>
        </div>
      </div>

      <div className="note-card">
        <div className="note-card__title">Note Title</div>
        <div className="note-card__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="note-card__footer">
          <div className="note-card-footer__datetime">12 Dec 2020</div>
          <div className="note-card-footer__tag">Tag</div>
        </div>
      </div>

      <div className="note-card">
        <div className="note-card__title">Note Title</div>
        <div className="note-card__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="note-card__footer">
          <div className="note-card-footer__datetime">12 Dec 2020</div>
          <div className="note-card-footer__tag">Tag</div>
        </div>
      </div>

      <div className="note-card">
        <div className="note-card__title">Note Title</div>
        <div className="note-card__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="note-card__footer">
          <div className="note-card-footer__datetime">12 Dec 2020</div>
          <div className="note-card-footer__tag">Tag</div>
        </div>
      </div>

      <div className="note-card">
        <div className="note-card__title">Note Title</div>
        <div className="note-card__body">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="note-card__footer">
          <div className="note-card-footer__datetime">12 Dec 2020</div>
          <div className="note-card-footer__tag">Tag</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayNotes;
