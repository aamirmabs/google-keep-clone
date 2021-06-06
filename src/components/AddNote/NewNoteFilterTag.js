import React from "react";

function NewNoteFilterTag(props) {
  const tagClass = `tag tag-${props.tagColor}`;

  return (
    <span key={props.tagName + Math.floor(Math.random())} className={tagClass}>
      {props.tagName}
    </span>
  );
}

export default NewNoteFilterTag;
