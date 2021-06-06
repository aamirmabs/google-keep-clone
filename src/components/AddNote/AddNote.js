import React from "react";
import NewNoteTagsList from "./NewNoteTagsList";

import "./AddNote.css";

const AddNote = (props) => {
  // <AddNote tagsArray={tagsArray} setTagsArray={setTagsArray} />

  //state management
  // console.log(props.tagsArray);

  return (
    <form id="add-note-form" action="">
      <input
        type="text"
        id="add-note-form__title"
        placeholder="Add Note Title..."
      />
      <textarea
        name="note-body"
        id="add-note-form__body"
        rows="5"
        placeholder="Add Note Body..."
      ></textarea>
      <div id="add-note-options">
        <div id="add-tag-options__select-tag">
          <h3>Select Tag</h3>
          <div id="select-tag__tag-list">
            <NewNoteTagsList
              tagsObject={props.tagsObject}
              setTagsObject={props.setTagsObject}
            />
          </div>
        </div>
        <div id="add-note-options__add-new-tag">
          <h3>New Tag</h3>
          <input type="text" name="" id="add-new-tag__input" />
        </div>

        <div id="add-note-options__buttons">
          <button id="add-note-options__reset-button">Reset</button>
          <button id="add-note-options__submit-button">Add Note</button>
        </div>
      </div>
    </form>
  );
};

export default AddNote;
