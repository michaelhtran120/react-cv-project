import React from "react";

function TextArea(props) {
  return (
    <textarea
      id={props.id}
      name={props.name}
      form={props.form}
      placeholder={props.placeholder}
    ></textarea>
  );
}

export default TextArea;
