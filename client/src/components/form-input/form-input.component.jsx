import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="groupContainer">
    <input className="formInputContainer" onChange={handleChange} {...props} />
    {label && <label className={`formInputLabel ${props.value?.length ? 'shrink' : ''}`}>{label}</label>}
  </div>
);

export default FormInput;
