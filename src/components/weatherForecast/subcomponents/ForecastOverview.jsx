import { useSelector } from "react-redux";
import Translations from "../../../system/settings/Translations";
import { useEffect } from "react";
import { useState } from "react";
import { GetModeValue, GetRawNumericValue, GetAvgValue } from "../../../system/services/Calculations"

function ForecastOverview(props) {
  const lang = useSelector(state => state.system.language)
  const [verticalHeaders, setVerticalHeaders] = useState([]);
  const [horizontalHeaders, setHorizontalHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);

  const createSummaryModel= (dailyForecastSet, dailyProps) => {
    const summarySet = [];
    
    for(let i in dailyProps){
      const { key } = dailyProps[i];
   
      const singleDetailModel = {
        minValue: Math.min(...dailyForecastSet.map(el => GetRawNumericValue(el[key]))),
        maxValue: Math.max(...dailyForecastSet.map(el => GetRawNumericValue(el[key]))),
        modeValue: GetModeValue(dailyForecastSet.map(el => GetRawNumericValue(el[key]))),
        meanValue: parseInt(GetAvgValue(dailyForecastSet.map(el => GetRawNumericValue(el[key])))),
      };
      summarySet.push(singleDetailModel);
    }
    return summarySet;
  }

  useEffect(()=>{
    const { tempUnit } = props;
    const forecastProps = [
      {label: Translations.forecastDetails.minValue[lang], key: "minValue"},
      {label: Translations.forecastDetails.maxValue[lang], key: "maxValue"},
      {label: Translations.forecastDetails.meanValue[lang], key: "meanValue"},
      {label: Translations.forecastDetails.modeValue[lang], key: "modeValue"},
    ];
    const singleDayProps = [
      {label: Translations.forecastDetails.morningTemp[lang]+` (${tempUnit})`, key: "morningTemp"},
      {label: Translations.forecastDetails.dayTemp[lang]+` (${tempUnit})`, key: "dayTemp"},
      {label: Translations.forecastDetails.nightTemp[lang]+` (${tempUnit})`, key: "nightTemp"},
      {label: Translations.forecastDetails.humilidity[lang]+" (%)", key: "humilidity"},
    ]
    setHorizontalHeaders(forecastProps);
    setVerticalHeaders(singleDayProps);
    setTableData(createSummaryModel(props.dailyForecastSet, singleDayProps));

  }, [lang, props]);
  
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr className="table-header">
            <th scope="col" className="text-center" key={"th"} style={{alignItems: "center"}}>
              {Translations.summary[lang]}
            </th>
            {horizontalHeaders.map((col, index) => {
              return (
                <th scope="col" className="text-center" key={"th"+index}>
                  {col.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
            {verticalHeaders.map((row, row_index) => {
              return (
              <tr
                key={"tr"+row_index}
              >
                <td key={"td"} className="text-center" style={{fontWeight: "bold"}}>
                  {row.label}
                </td>
                {horizontalHeaders.map((col, col_index) => {   
                  return (
                    <td key={"td" + row_index + '-' + col_index} className="text-center">
                      {tableData[row_index][col.key]}
                    </td>
                  );
                })}
              </tr>
              )
                })}
        </tbody> 
      </table>
    </div>
  );
}
export default ForecastOverview;
