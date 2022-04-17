import React, { useState, useEffect } from "react";
import { getApi } from "../../system/services/ApiRequests";
import AppVariables from "../../system/settings/AppVariables";
import SystemSpinner from "../shared/SystemSpinner";
import TypeLocationForm from "./subcomponents/TypeLocationForm";
import ForecastResultsTable from "./subcomponents/ForecastResultsTable";
import Translations from "../../system/settings/Translations";
import { useSelector } from "react-redux";
import ForecastOverview from "./subcomponents/ForecastOverview";

function WeatherForecast(props) {
  const lang = useSelector(state => state.system.language)

  const [fetchProcessing, setFetchProcessingState] = useState(false);
  const [forecastInfo, setForecastInfo] = useState({});
  const [tableData, setTableData] = useState(null);
  const [tempUnit, setTempUnit] = useState("");

  const refreshForecastData = ({ cityname, lat, lon, unit, searchByCoordinates }) => {
    const unitPostFix = unit.id.toString().localeCompare('metric') === 0 ? 'C' : 'F' 

    const mapResults = (resultSet) => {
      return resultSet.filter((el,index)=> index <= AppVariables.forecastDayAmount).map(el => {
        const mapped = {
          morningTemp: parseInt(el.temp.morn),
          dayTemp: parseInt(el.temp.day),
          nightTemp: parseInt(el.temp.night),
          humilidity: parseInt(el.humidity),
          weatherIcon: el.weather[0].icon
        };
        return mapped;
      })
    }

    const fetchForecastByCoord = (url, coord) =>{
      getApi(url)
      .then((res) => {
        setTableData(mapResults(res.daily));
        setFetchProcessingState(false);
        setForecastInfo({ lon: coord.lon, lat: coord.lat, cityname: cityname})
        setTempUnit(unitPostFix);
      })
      .catch((er) => {
        setTableData([]);
        setFetchProcessingState(false);
        throw er;
      });
    }

    const {
      openweathermapApiKey,
      openweathermapApiEndpointOneCall,
    } = AppVariables;
    let url = `${openweathermapApiEndpointOneCall}?lat=${lat}&lon=${lon}&units=${unit.id}&appid=${openweathermapApiKey}`;
    setFetchProcessingState(true);

    if (searchByCoordinates) {
      fetchForecastByCoord(url, {lat: lat, lon: lon})
    } else {
      const specifyCordinatesUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${openweathermapApiKey}`;

      getApi(specifyCordinatesUrl)
        .then((locationinfo) => {
          const { coord } = locationinfo;
          url = `${openweathermapApiEndpointOneCall}?lat=${coord.lat}&lon=${coord.lon}&units=${unit.id}&appid=${openweathermapApiKey}`;

          fetchForecastByCoord(url, coord);
        })
        .catch((er) => {
          setTableData([]);
          setFetchProcessingState(false);
        });
    }
  };

  return (
    <div className="container py-4">
      <div className="col align-self-center">
        <TypeLocationForm
          onSubmit={(filters) => refreshForecastData(filters)}
        />
        {/*Alerty jak wiele rekordów lub błedy*/}
        {fetchProcessing ? (
          <SystemSpinner />
        ) : tableData ? 
        <>
          {tableData.length !== 0 ? 
          <div className="row mb-4">
            <h3>{Translations.forecastInfo(forecastInfo.lat, forecastInfo.lon, lang, forecastInfo.cityname)}</h3>
          </div> : null}
          <div className="row mb-4"> 
            <ForecastResultsTable dailyForecastSet={tableData} forecastInfo={forecastInfo} daysAmount={AppVariables.forecastDayAmount} tempUnit={tempUnit}/> 
          </div>
          {tableData.length !== 0 ? 
          <>
          <div className="row mb-4"> 
            <ForecastOverview dailyForecastSet={tableData} tempUnit={tempUnit}/>
            {/*graph*/}
          </div> 
          </>
          : null }
        </>
        : null
        }
      </div>
    </div>
  );
}

export default WeatherForecast;
