import React from "react";

function FilterTag(props) {
  // <FilterTag
  //   key={key}
  //   title={tagTitle}
  //   color={tagColor ? tagColor : false}
  //   filteredTag={props.filteredTag}
  // />;

  const tagClassName = props.color ? `tag tag-${props.color}` : `tag`;
  const idName = props.id ? props.id : undefined;
  // console.log(tagClassName);

  const handleTagClick = (e) => {
    // sending the tag name upwards to higher components
    props.filteredTag(e.target.innerHTML);
  };

  return (
    <span onClick={handleTagClick} className={tagClassName} id={idName}>
      {props.title}
    </span>
  );
}

export default FilterTag;
