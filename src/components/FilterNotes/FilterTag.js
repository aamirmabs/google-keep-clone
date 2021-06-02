import React from "react";

function FilterTag(props) {
  // <FilterTag title={tagTitle} color={tagColor} />

  const tagClassName = props.color ? `tag tag-${props.color}` : `tag`;
  const id = props.id ? props.id : ``;
  // console.log(tagClassName);

  return (
    <span className={tagClassName} id={id}>
      {props.title}
    </span>
  );
}

export default FilterTag;
