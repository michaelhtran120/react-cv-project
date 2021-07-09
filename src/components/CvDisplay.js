import React from "react";

const CvDisplay = ({ personalState, experienceState, educationState }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    homeAddress,
    linkedinLink,
    website,
  } = personalState;

  return (
    <>
      <div className='cv-head'>
        <div className='cv-head-name'>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
        <div className='cv-head-info'>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{homeAddress}</p>
          <p>{linkedinLink}</p>
          <p>{website}</p>
        </div>
      </div>
      <hr />
      <div className='cv-body'>
        <div>
          <h2>Experiences</h2>
          <hr />
          {experienceState.map((exp) => {
            return (
              <div className='exp-container'>
                <div className='exp-head'>
                  <div>
                    <h3>{exp.company}</h3>
                    <h4>{exp.position}</h4>
                  </div>
                  <div>
                    <p>{exp.companyAddress}</p>
                    <p>{exp.yearsOfEmp}</p>
                  </div>
                </div>
                <div className='exp-description'>{exp.responsibilities}</div>
              </div>
            );
          })}
        </div>
        <div className='edu-body'>
          <h2>Education</h2>
          <hr />
          <div className='edu-container-grid'>
            {educationState.map((edu) => {
              return (
                <div className='edu-grid-item'>
                  <h3>{edu.institution}</h3>
                  <h4>{edu.location}</h4>
                  <p>{edu.degreeCert}</p>
                  <p>{edu.study}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CvDisplay;
