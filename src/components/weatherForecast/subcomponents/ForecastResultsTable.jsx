import { useSelector } from "react-redux";
import Translations from "../../../system/settings/Translations";
import { useEffect } from "react";
import { useState } from "react";
import { GetWeekDaysLabels } from "../../../system/services/Calculations";

function ForecastResultsTable(props) {
  const lang = useSelector(state => state.system.language)
  
  const [verticalHeaders, setVerticalHeaders] = useState([]);
  const [horizontalHeaders, setHorizontalHeaders] = useState([]);

  useEffect(()=>{
    const { tempUnit } = props;

    const forecastProps = [
      {label: Translations.forecastDetails.morningTemp[lang]+` (${tempUnit})`, key: "morningTemp"},
      {label: Translations.forecastDetails.dayTemp[lang]+` (${tempUnit})`, key: "dayTemp"},
      {label: Translations.forecastDetails.nightTemp[lang]+` (${tempUnit})`, key: "nightTemp"},
      {label: Translations.forecastDetails.humilidity[lang]+" (%)", key: "humilidity"},
    ]
    setVerticalHeaders(forecastProps);
    setHorizontalHeaders(GetWeekDaysLabels(lang, props.daysAmount));
  }, [lang, props]);

  
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr className="table-header">
            <th scope="col" className="text-center" key={"th"} style={{alignItems: "center"}}>
              <p style={{margin: "0px"}}>{Translations.forecast[lang]}</p>
            </th>
            {horizontalHeaders.map((col, index) => {
              return (
                <th scope="col" className="text-center" key={"th"+index}>
                  {col}
                  {index < props.dailyForecastSet.length ? 
                  <img src={`http://openweathermap.org/img/wn/${props.dailyForecastSet[index].weatherIcon}@2x.png`} alt="Weather Icon" style={{width: "40px", height: "30px"}}/> : null}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.dailyForecastSet.length > 0 ? verticalHeaders.map((row, index) => {
            
            return (
              <tr
                key={index}
              >
                <td key={"td"} className="text-center" style={{fontWeight: "bold"}}>
                  {row.label}
                </td>
                {props.dailyForecastSet.map((col, col_index) => {
                  if(col_index >= props.daysAmount) return;
                  
                  return (
                    <td key={index + "-" + col_index} className="text-center">
                      {col[row.key]}
                    </td>
                  );
                })}
              </tr>
            );
          }): null}
        </tbody> 
      </table>
      {props.dailyForecastSet.length === 0 ? (
          <div style={{ textAlign: "center",fontWeight: 'bold' }}>{Translations.forecastLackInfo[lang]}</div>
        ) : null}
    </div>
  );
}
export default ForecastResultsTable;
