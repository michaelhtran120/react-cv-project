import React, { useState } from "react";

import Input from "./Input";

const ExperienceInfoForm = ({
  position,
  company,
  companyAddress,
  yearsOfEmp,
  description,
}) => {
  const [experienceData, setExpData] = useState({});

  return (
    <div className='form-container'>
      <Input
        type='text'
        name='position'
        placeholder='Position / Title'
        value={position}
      />
      <Input type='text' name='company' placeholder='Company' value={company} />
      <Input
        type='text'
        name='companyAddress'
        placeholder='Company Address'
        value={companyAddress}
      />
      <Input
        type='text'
        name='yearsOfEmp'
        placeholder='Years Employed'
        value={yearsOfEmp}
      />
      <textarea
        name='responsibilities'
        placeholder='Describe your responsibilities'
        value={description}
      >
        {description}
      </textarea>
    </div>
  );
};

export default ExperienceInfoForm;
