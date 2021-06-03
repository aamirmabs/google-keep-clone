import React from "react";
import FilterTag from "./FilterTag";

import "./FilterNotes.css";

function FilterNotes(props) {
  //   <FilterNotes
  //   handleClick={handleFilterNotes}
  //   tagsDB={tagsArray}
  //   resetTagsFilter={setTagsArray}
  // />

  // event handlers

  const handleFilteredTagClick = (e) => {
    // props.filteredTag(e.target);
    console.log("clicked");
    props.filteredTag(e.target.innerHTML);
  };

  // creating an array of tags and their backgrounds
  const tags = props.tagsDB;
  const tagsArray = [
    <FilterTag
      key="default"
      title="All"
      color={false}
      id="default-tag"
      filteredTag={props.filteredTag}
    />,
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
        filteredTag={props.filteredTag}
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
