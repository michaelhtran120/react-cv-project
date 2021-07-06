import React from "react";

function Form(props) {
  return (
    <input
      className='form-inputs'
      type={props.type}
      id={props.id}
      name={props.for}
      placeholder={props.placeholder}
    ></input>
  );
}

export default Form;
