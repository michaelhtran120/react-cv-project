import Input from "./Input";

const ExperienceInfoForm = ({ state, onDelete, onChange }) => {
  const { position, company, companyAddress, yearsOfEmp, description } = state;

  return (
    <div className='form-container'>
      <Input
        type='text'
        name='position'
        placeholder='Position / Title'
        value={position}
        onChange={onChange}
      />
      <Input
        type='text'
        name='company'
        placeholder='Company'
        value={company}
        onChange={onChange}
      />
      <Input
        type='text'
        name='companyAddress'
        placeholder='Company Address'
        value={companyAddress}
        onChange={onChange}
      />
      <Input
        type='text'
        name='yearsOfEmp'
        placeholder='Month/Year - Month/Year'
        value={yearsOfEmp}
        onChange={onChange}
      />
      <textarea
        name='responsibilities'
        placeholder='Describe your responsibilities'
        value={description}
        onChange={onChange}
      >
        {description}
      </textarea>
      <button className='del-btn' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default ExperienceInfoForm;
