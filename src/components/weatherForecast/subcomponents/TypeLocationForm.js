import React from "react";
import { reduxForm, Field } from "redux-form";
import { useSelector } from "react-redux";
import Translations from "../../../system/settings/Translations";
import InputField from "../../shared/formFields/InputField";
import { required } from "../../../system/services/Validations";

function TypeLocationForm(props) {
  const lang = useSelector(state=>state.system.language)
  return (
    <div className="jumbotron">
      <div className="container">
        <form onSubmit={(data)=>props.handleSubmit(props.onSubmit)(data)}>
          <div className="row mb-4">
            <h3>{Translations.forecast[lang]}</h3>
          </div>
          <Field
            label={Translations.error[lang]}
            name={"name"}
            component={InputField}
            validate={required}
            lang={lang}
          />
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center"/>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap">
            <button
              className="btn btn-primary"
              type="submit"
            >
              {Translations.success[lang]}
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
}

export default reduxForm({
  form: "TypeLocationForm", 
})(TypeLocationForm);
