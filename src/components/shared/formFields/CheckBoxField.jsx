const CheckBoxField = ({
  input,
  label,
  disabled,
}) => (
  <div className="form-group mb-5">
    <span className="form-check">
      <input
        checked={input.value}
        disabled={disabled}
        type="checkbox"
        className="form-check-input"
        {...input}
        id={input.name}
        style={{marginRight: "5px", marginBottom: "5px"}}
      />
      
      <label className="form-check-label" htmlFor={input.name}>
        {label}
      </label>
    </span>
  </div>
);

export default CheckBoxField;