import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../system/services/ApiRequests";
import AppVariables from "../../system/settings/AppVariables";
import SystemSpinner from "../shared/SystemSpinner";
import TypeLocationForm from "./subcomponents/TypeLocationForm";

function WeatherForecast(props) {
  const [fetchProcessing, setFetchProcessingState] = useState(true);
  const [tableData, setTableData] = useState([]);

  const refreshForecastData = (props) => {
    const {
      openweathermapApiKey,
      openweathermapApiEndpointOneCall,
    } = AppVariables;
    const cityname = "London";
    const specifyCordinatesUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${openweathermapApiKey}`;

    setFetchProcessingState(true);
    getApi(specifyCordinatesUrl)
      .then((locationinfo) => {
        const { lat, lon } = locationinfo.coord;
        const url = `${openweathermapApiEndpointOneCall}?lat=${lat}&lon=${lon}&appid=${openweathermapApiKey}`;

        getApi(url)
          .then((res) => {
            console.log(res);
            setTableData(res.daily);
            setFetchProcessingState(false);
          })
          .catch((er) => {
            throw er;
          });
      })
      .catch((er) => {
        setTableData([]);
        setFetchProcessingState(false);
        props.riseError(true);
      });
  };

  useEffect(() => {
    refreshForecastData(props);
  }, [props]);

  return (
    <div className="container py-4">
      <div className="col align-self-center">
        <TypeLocationForm/>
        {/*Alerty jak wiele rekordów lub błedy*/}
        {fetchProcessing ? (
          <SystemSpinner/>
        ) : (
            /*Tabela wyników i wykres*/
            null
        )}
      </div>
    </div>
  );
}

export default WeatherForecast;
