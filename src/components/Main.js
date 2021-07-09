import React, { useState } from "react";
import uniqid from "uniqid";

import PersonalInfoForm from "./PersonalInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import CvDisplay from "./CvDisplay";

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

  const [educationInfo, setEduInfo] = useState([]);

  const handlePersInfoChange = (e) => {
    const { name, value } = e.target;
    setPersInfo({
      ...personalInfo,
      [name]: value,
    });
    console.log(personalInfo);
  };

  const handleExpInfoChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceInfo];
    list[index][name] = value;
    setExpInfo(list);
    console.log(experienceInfo);
  };

  const handleEduInfoChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationInfo];
    list[index][name] = value;
    setEduInfo(list);
    console.log(educationInfo);
  };

  const addExp = () => {
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
    console.log(experienceInfo);
  };
  const delExp = (index) => {
    const list = [...experienceInfo];
    list.splice(index, 1);
    setExpInfo(list);
    console.log("delete");
  };

  const addEdu = () => {
    setEduInfo([
      ...educationInfo,
      {
        key: uniqid(),
        institution: "",
        location: "",
        degreeCert: "",
        study: "",
      },
    ]);
    console.log(educationInfo);
  };
  const delEdu = (index) => {
    const list = [...educationInfo];
    list.splice(index, 1);
    setEduInfo(list);
    console.log("delete");
  };

  return (
    <div className='app-body'>
      <div className='cv-form'>
        <h3>Personal Info</h3>
        <PersonalInfoForm
          value={personalInfo}
          onChange={handlePersInfoChange}
        />
        <h3>
          Experiences
          <button className='add-btn' onClick={addExp}>
            Add Experience
          </button>
        </h3>
        {experienceInfo.map((exp, i) => {
          return (
            <ExperienceInfoForm
              key={exp.key}
              state={exp}
              onDelete={() => delExp(i)}
              onChange={(e) => handleExpInfoChange(e, i)}
            />
          );
        })}
        <h3>
          Education/Certification
          <button className='add-btn' onClick={addEdu}>
            Add Education
          </button>
        </h3>
        {educationInfo.map((edu, i) => {
          return (
            <EducationInfoForm
              state={edu}
              key={edu.key}
              onDelete={() => delEdu(i)}
              onChange={(e) => {
                handleEduInfoChange(e, i);
              }}
            />
          );
        })}
      </div>
      <div className='cv-display'>
        <CvDisplay
          personalState={personalInfo}
          experienceState={experienceInfo}
          educationState={educationInfo}
        />
      </div>
    </div>
  );
};

export default Main;
