import { useSelector } from "react-redux";
import Translations from "../system/settings/Translations";

function InfoGeneral() {
  const lang = useSelector((state) => state.system.language);

  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h2 className="jumbotron-heading">
          {Translations.generalInfo[lang]}
        </h2>
        <p className="lead text-muted">
          {Translations.additionalInfo[lang]}
        </p>
      </div>
    </section>
  );
}

export default InfoGeneral;
