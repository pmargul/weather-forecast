import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { useSelector } from "react-redux";
import Translations from "../../../system/settings/Translations";
import InputField from "../../shared/formFields/InputField";
import { required } from "../../../system/services/Validations";
import CheckBoxField from "../../shared/formFields/CheckBoxField";

function TypeLocationForm(props) {
  const lang = useSelector(state=>state.system.language)
  const [searchByCoordinates, switchSearchOption] = useState(false);

  return (
    <div className="jumbotron">
      <div className="container">
        <form onSubmit={(data)=>props.handleSubmit(props.onSubmit)(data)}>
          <div className="row mb-4">
            <h3>{Translations.searchForecast[lang]}</h3>
          </div>
          <Field
            label={Translations.cityName[lang]}
            name={"name"}
            component={InputField}
            validate={required}
          />
          {CheckBoxField()}
          <Field
            label={Translations.searchByCoordinates[lang]}
            name={"name"}
            component={CheckBoxField}
          />
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center"/>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-end flex-wrap">
            <button
              className="btn btn-primary"
              type="submit"
            >
              {Translations.search[lang]}
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
