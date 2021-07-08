import React, { useState } from "react";
import uniqid from "uniqid";
import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";

const Main = () => {
  const [personalInfo, setPersInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    homeAddress: "",
    linkedinLink: "",
    website: "",
  });
  const [experienceInfo, setExpInfo] = useState([]);

  const handlePersInfoChange = (e) => {
    const { name, value } = e.target;
    setPersInfo({
      ...personalInfo,
      [name]: value,
    });
    console.log(personalInfo);
  };

  const addExp = (e) => {
    e.preventDefault();
    setExpInfo([
      ...experienceInfo,
      {
        key: uniqid(),
        position: "",
        company: "",
        companyAddress: "",
        yearsOfEmp: "",
        responsibilities: "",
      },
    ]);
  };

  return (
    <div className='cv-body'>
      <div className='cv-form'>
        <h3>Personal Info</h3>
        <PersonalInfoForm
          value={personalInfo}
          onChange={handlePersInfoChange}
        />
        <h3>
          Experiences{" "}
          <button id='add-btn' onClick={addExp}>
            Add
          </button>
        </h3>
        {experienceInfo.map((exp) => {
          return (
            <ExperienceInfoForm
              key={exp.key}
              position={exp.position}
              company={exp.company}
              companyAddress={exp.companyAddress}
              yearsOfEmp={exp.yearsOfEmp}
              responsibilities={exp.responsibilities}
            />
          );
        })}
      </div>
      <div className='cv-display'></div>
    </div>
  );
};

export default Main;
