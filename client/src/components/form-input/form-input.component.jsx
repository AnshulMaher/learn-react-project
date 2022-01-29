import './form-input.styles.css';

const FormInput = ({ label, ...props }) => (
  <div className="groupContainer">
    <input className="formInputContainer" {...props} />
    {label && <label className={`formInputLabel ${props.value?.length ? 'shrink' : ''}`}>{label}</label>}
  </div>
);

export default FormInput;
