import { useSelector } from "react-redux";
import Translations from "../../../system/settings/Translations";
import { useEffect } from "react";
import { useState } from "react";
import DataChart from "../../shared/Chart";
import AppColors from "../../../system/settings/AppColors";
import { GetWeekDaysLabels } from "../../../system/services/Calculations";

function ForecastChartWrapper(props) {
  const lang = useSelector((state) => state.system.language);
  const [xAxisLabels, setXAxisLabels] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setXAxisLabels(GetWeekDaysLabels(lang, props.daysAmount));

    const chartModel = [
      {
        label:
          Translations.forecastDetails.nightTemp[lang] + ` (${props.tempUnit})`,
        data: props.dailyForecastSet.map((el) => el.nightTemp),
        borderColor: AppColors.veryDarkGreen,
        backgroundColor: AppColors.veryDarkGreen,
      },
      {
        label:
          Translations.forecastDetails.dayTemp[lang] + ` (${props.tempUnit})`,
        data: props.dailyForecastSet.map((el) => el.dayTemp),
        borderColor: AppColors.red,
        backgroundColor: AppColors.red,
      },
      {
        label: Translations.forecastDetails.humilidity[lang] + " (%)",
        data: props.dailyForecastSet.map((el) => el.humilidity),
        borderColor: AppColors.blue,
        backgroundColor: AppColors.blue,
      },
    ];
    setChartData(chartModel);
  }, [lang, props]);

  return (
    <div className="container py-4">
      <div className="col align-self-center">
        {chartData == null || xAxisLabels == null ? null : (
          <DataChart
            title={Translations.forecastDetails[lang]}
            xLabels={xAxisLabels}
            chartData={chartData}
          />
        )}
      </div>
    </div>
  );
}
export default ForecastChartWrapper;
