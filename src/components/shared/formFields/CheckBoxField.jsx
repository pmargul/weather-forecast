const CheckBoxField = ({
  input,
  label,
  disabled,
  customizedOnChange
}) => (
  <div className="form-group mb-4">
    <span className="form-check">
      <input
        checked={input.value}
        disabled={disabled}
        type="checkbox"
        className="form-check-input"
        {...input}
        onChange={async (e) => {
          await input.onChange(e);
          console.log(e)
          if (customizedOnChange != null) {
            customizedOnChange(e.target.checked);
          }
        }}
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