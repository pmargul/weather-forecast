import React from "react";
import InfoGeneral from "./components/InfoGeneral";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import Header from "./components/header/Header";
import AlertWrapper from "./components/shared/AlertWrapper";

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main role="main" style={{ paddingTop: "10px" }}>
        <AlertWrapper />
        <InfoGeneral />
        <WeatherForecast/>
      </main>
    </>
  );
}

export default App;
