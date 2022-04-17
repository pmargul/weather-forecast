import React, { useState, useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import { useSelector } from "react-redux";
import Translations from "../../../system/settings/Translations";
import InputField from "../../shared/formFields/InputField";
import { required, number } from "../../../system/services/Validations";
import CheckBoxField from "../../shared/formFields/CheckBoxField";
import DropdownField from "../../shared/formFields/DropdownField";

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
            name={"cityname"}
            component={InputField}
            validate={searchByCoordinates? null : required}
            disabled={searchByCoordinates}
            lang={lang}
          />
          <Field
            label={Translations.tempUnit[lang]}
            name={"unit"}
            component={DropdownField}
            data={[
              {id: "imperial", label: Translations.fahrenheit[lang]},
              {id: "metric", label: Translations.celsius[lang]},
            ]}
            valueField="id"
            textField="label"
            validate={required}
            lang={lang}
          />
          <Field
            label={Translations.searchByCoordinates[lang]}
            name={"searchByCoordinates"}
            component={CheckBoxField}
            customizedOnChange={(val)=>{
              switchSearchOption(val);
            }}
          />
        {searchByCoordinates ? 
        <div className="row">
          <div className="col-4">
          <Field
            label={Translations.latitude[lang]}
            name={"lat"}
            component={InputField}
            validate={number}
            lang={lang}
          />
          </div>
          <div className="col-4">
          <Field
            label={Translations.longitude[lang]}
            name={"long"}
            component={InputField}
            validate={number}
            lang={lang}
          />
          </div>
        </div>
        : null}
        <div className="row mb-5">
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
