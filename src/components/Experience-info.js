import React from "react";
import Form from "./Forms";
import TextArea from "./Text-Area";

function Experience() {
  return (
    <div className='container' id='experience'>
      <h2>Experience</h2>
      <Form type='text' id='position' name='position' placeholder='Position' />
      <Form type='text' id='company' name='company' placeholder='Company' />
      <Form type='text' id='address' name='address' placeholder='Address' />
      <Form
        type='text'
        id='start-date'
        name='start-date'
        placeholder='Start-date'
      />
      <Form type='text' id='end-date' name='end-date' placeholder='End-date' />
      <TextArea
        name='description'
        form='experience'
        placeholder='Describe your duties'
        id='experience-input'
      />
    </div>
  );
}

export default Experience;
