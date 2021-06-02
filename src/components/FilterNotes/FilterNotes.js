import React, { useState } from "react";
import FilterTag from "./FilterTag";

import "./FilterNotes.css";

function FilterNotes(props) {
  // <FilterNotes tagsDB={tagsArray} resetTagsFilter={setTagsArray} />

  // creating an array of tags and their backgrounds
  const tags = props.tagsDB;
  const tagsArray = [
    <FilterTag key="default" title="All" color={false} id="default-tag" />,
  ];
  const tagsTitleArray = [];
  const tagsColorsArray = [];

  for (const key of Object.keys(tags)) {
    const tagTitle = tags[key].tagName;
    tagsTitleArray.push(tagTitle);

    const tagColor = tags[key].tagColor;
    tagsColorsArray.push(tagColor);

    tagsArray.push(
      <FilterTag
        key={key}
        title={tagTitle}
        color={tagColor ? tagColor : false}
      />
    );
  }

  // generating the JSX to render the tags

  return (
    <div className="filter-notes">
      <h3 className="filter-section-heading">Filter</h3>
      {tagsArray}
    </div>
  );
}

export default FilterNotes;
