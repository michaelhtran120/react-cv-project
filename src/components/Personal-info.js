import React from "react";
import Form from "./Forms";

function Personal() {
  return (
    <div className='container' id='personal-info'>
      <h2>Personal Information</h2>
      <Form type='text' id='fname' name='fname' placeholder='First Name' />
      <Form type='text' id='lname' name='lname' placeholder='Last Name' />
      <Form type='text' id='address' name='address' placeholder='Address' />
      <Form type='text' id='phone' name='phone' placeholder='Phone Number' />
      <Form type='email' id='email' name='email' placeholder='Email' />
      <Form
        type='text'
        id='linkedin'
        name='linkedIn'
        placeholder='LinkedIn link'
      />
    </div>
  );
}

export default Personal;
