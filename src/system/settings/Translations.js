const Translations = {
  title: {
    "pl-PL": "Projekt rekrutacyjny - Tivix",
    "en-GB": "Recruitment project - Tivix",
  },
  plLang: {
    "pl-PL": "Polski",
    "en-GB": "Polish",
  },
  engLang: {
    "pl-PL": "Angielski",
    "en-GB": "English",
  },
  commonErrorMessage: {
    "pl-PL": "Wystąpił błąd podczas wykonywania operacji",
    "en-GB": "An error occurred while performing the operation",
  },
  success: {
    "pl-PL": "Sukces",
    "en-GB": "Success",
  },
  error: {
    "pl-PL": "Błąd",
    "en-GB": "Error",
  },
  searchForecast: {
    "pl-PL": "Wyszukaj prognozę",
    "en-GB": "Search for a forecast",
  },
  search: {
    "pl-PL": "Wyszukaj",
    "en-GB": "Search",
  },
  cityName: {
    "pl-PL": "Nazwa miasta",
    "en-GB": "City name",
  },
  tempUnit: {
    "pl-PL": "Jednostka temperatury",
    "en-GB": "Temperature unit",
  },
  fahrenheit: {
    "pl-PL": "Fahrenheit",
    "en-GB": "Fahrenheit",
  },
  celsius: {
    "pl-PL": "Celsjusz",
    "en-GB": "Celsius",
  },
  coordinates: {
    "pl-PL": "Współrzędne",
    "en-GB": "Coordinates",
  },
  searchByCoordinates: {
    "pl-PL": "Wyszukaj na podstawie współrzędnych",
    "en-GB": "Search by coordinates",
  },
  latitude: {
    "pl-PL": "Szerokość geograficzna",
    "en-GB": "Latitude",
  },
  longitude: {
    "pl-PL": "Długość geograficzna",
    "en-GB": "Longitude",
  },
  operationCompleted: {
    "pl-PL": "Operacja zakończona pomyślnie",
    "en-GB": "Operation completed successfully",
  },
  forecastLackInfo: {
    "pl-PL": "Brak prognóz do wyświetlenia dla wybranych kryteriów. Upewnij się czy podana nazwa miasta lub współrzędnę są prawidłowe",
    "en-GB": "There are no forecasts to display for the selected criteria. Make sure that the given city name or coordinate is correct",
  },
  generalInfo: {
    "pl-PL": "Aplikacja służąca do wyświetlania prognozy pogody na najbliższe 5 dni dla danego miasta",
    "en-GB": "Application designed to display the weather forecast for the next 5 days for a given city",
  },
  additionalAppInfo: {
    "pl-PL": "Aplikacja korzysta z publicznego api OpenWeatherMap. Aby otrzymać prognozę, podaj nazwę miasta lub jego współrzędnę",
    "en-GB": "The application uses the public OpenWeatherMap api. To get a forecast, please enter the name of the city or its coordinate",
  },
  forecast: {
    "pl-PL": "Prognoza",
    "en-GB": "Forecast",
  },
  summary: {
    "pl-PL": "Podsumowanie",
    "en-GB": "Summary",
  },
  fieldRequired: {
    "pl-PL": "Pole jest wymagane",
    "en-GB": "The field is required",
  },
  passInteger: {
    "pl-PL": "Podaj liczbę całkowitą",
    "en-GB": "Enter an integer value",
  },
  passNumber: {
    "pl-PL": "Podaj poprawną wartość liczbową",
    "en-GB": "Enter a valid numeric value",
  },
  max50: {
    "pl-PL": "Maksymalna dozwolona długość treści to 50 znaków",
    "en-GB": "The maximum allowed content length is 50 characters",
  },
  max100: {
    "pl-PL": "Maksymalna dozwolona długość treści to 100 znaków",
    "en-GB": "The maximum allowed content length is 100 characters",
  },
  connectionError: {
    "pl-PL": "Błąd połączenia",
    "en-GB": "Connection error",
  },
  connectionProblemInfo: {
    "pl-PL": "Wystąpił problem z połączeniem. Spróbuj odświeżyć aplikację bądź skontaktuj za pomocą adresu e-mail jeżeli problem nie zniknie",
    "en-GB": "There was a problem with your connection. Try to refresh the application or contact us via e-mail if the problem persists",
  },
  days: [
    {
      "pl-PL": "Niedziela",
      "en-GB": "Sunday",
    },
    {
      "pl-PL": "Poniedziałek",
      "en-GB": "Monday",
    },
    {
      "pl-PL": "Wtorek",
      "en-GB": "Tuesday",
    },
    {
      "pl-PL": "Środa",
      "en-GB": "Wednesday",
    },
    {
      "pl-PL": "Czwartek",
      "en-GB": "Thursday",
    },
    {
      "pl-PL": "Piątek",
      "en-GB": "Friday",
    },
    {
      "pl-PL": "Sobota",
      "en-GB": "Saturday",
    }
  ],
  forecastInfo: ( lat, lon, lang = "pl-PL", cityName = null) => {
    if(lang.toString().localeCompare("pl-PL")===0)
      return `Prognoza pogody na 5 najbliższych dni dla ${cityName ? "miasta o" : ""} współrzędnych (${lat},${lon})`
    return `Weather forecast for the next 5 days for ${cityName? "cities with": ""} coordinates (${lat}, ${lon}) `
  },
  forecastDetails: {
    morningTemp: {
      "pl-PL": "Temperatura rano",
      "en-GB": "Morning temperature",
    },
    dayTemp: {
      "pl-PL": "Temperatura w dzień",
      "en-GB": "Day temperature",
    },
    nightTemp: {
      "pl-PL": "Temperatura nocna",
      "en-GB": "Night temperature",
    },
    humilidity: {
      "pl-PL": "Wilgotność",
      "en-GB": "Humilidity",
    },
    minValue: {
      "pl-PL": "Minimalna wartość",
      "en-GB": "Minimum value",
    },
    maxValue: {
      "pl-PL": "Maksymalna wartość",
      "en-GB": "Maximum value",
    },
    meanValue: {
      "pl-PL": "Średnia wartość",
      "en-GB": "Mean value",
    },
    modeValue: {
      "pl-PL": "Mediana",
      "en-GB": "Mode value",
    },
  },
};

export default Translations;
