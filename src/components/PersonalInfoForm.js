import Input from "./Input";

const PersonalInfoForm = ({ value, onChange }) => {
  return (
    <div className='form-container'>
      <Input
        type='text'
        name='firstName'
        placeholder='First Name'
        onChange={onChange}
        value={value.firstName}
      />
      <Input
        type='text'
        name='lastName'
        placeholder='Last Name'
        onChange={onChange}
        value={value.lastName}
      />
      <Input
        type='email'
        name='email'
        placeholder='Email'
        onChange={onChange}
        value={value.email}
      />
      <Input
        type='text'
        name='phone'
        placeholder='Phone Number'
        onChange={onChange}
        value={value.phone}
      />
      <Input
        type='text'
        name='homeAddress'
        placeholder='Home Address'
        onChange={onChange}
        value={value.homeAddress}
      />
      <Input
        type='text'
        name='linkedinLink'
        placeholder='LinkedIn Profile Link'
        onChange={onChange}
        value={value.linkedinLink}
      />
      <Input
        type='text'
        name='website'
        placeholder='Website Link'
        onChange={onChange}
        value={value.website}
      />
    </div>
  );
};

export default PersonalInfoForm;
