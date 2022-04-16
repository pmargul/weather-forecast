import React, { useState } from "react";
import InfoGeneral from "./components/InfoGeneral";
import WeatherForecast from "./components/weatherForecast/WeatherForecast"
import Header from "./components/header/Header";
import ConnectionProblemInfo from "./components/ConnectionProblemInfo";
import AlertWrapper from "./components/shared/AlertWrapper";

function App() {
  const [error, riseError] = useState(false);

  return (
    <>
      <header>
        <Header />
      </header>
      <main role="main" style={{ paddingTop: "10px" }}>
        <AlertWrapper />
        {error ? (
          <ConnectionProblemInfo />
        ) : (
          <>
            <InfoGeneral />
            <WeatherForecast 
              riseError={(val) => riseError(val)} 
            />
          </>
        )}
      </main>
    </>
  );
}

export default App;
