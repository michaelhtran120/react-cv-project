import Input from "./Input";

const EducationInfoForm = ({ state, onDelete, onChange }) => {
  const { institution, location, degreeCert, study } = state;
  return (
    <div>
      <div className='form-container'>
        <Input
          type='text'
          name='institution'
          placeholder='Name of Institution'
          value={institution}
          onChange={onChange}
        />
        <Input
          type='text'
          name='location'
          placeholder='State, City, Country'
          value={location}
          onChange={onChange}
        />
        <Input
          type='text'
          name='degreeCert'
          placeholder='Degree / Certification'
          value={degreeCert}
          onChange={onChange}
        />
        <Input
          type='text'
          name='study'
          placeholder='Field Of Study'
          value={study}
          onChange={onChange}
        />
        <button className='del-btn' onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EducationInfoForm;
