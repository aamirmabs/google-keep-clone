import React from "react";
import NewNoteFilterTag from "./NewNoteFilterTag";

function NewNoteTagsList(props) {
  // <NewNoteTagsList
  //   tagsObject={props.tagsObject}
  //   setTagsObject={props.setTagsObject}
  // />
  console.log(props.tagsObject[0].tagName);

  // generating dynamic array of all tag terms
  // for (let i = 0; i < props.tagsObject.length; i++) {
  //   // const element = props.tagsObject[i].tagName + Math.random();
  //   console.log("Hello");
  // }

  const tagsJSX = [];

  for (const key in props.tagsObject) {
    if (Object.hasOwnProperty.call(props.tagsObject, key)) {
      const tag = props.tagsObject[key];
      const tagName = tag.tagName;
      const tagColor = tag.tagColor;

      tagsJSX.push(
        <NewNoteFilterTag
          key={tagName + Math.random()}
          className="tag"
          tagName={tag.tagName}
          tagColor={tag.tagColor}
        />
      );
    }
  }

  return <div id="new-note-tags-list">{tagsJSX}</div>;
}

export default NewNoteTagsList;
