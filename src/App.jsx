import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function getWeather() {
      try {
        const weatherFetch: AxiosResponse<unknown, {}> = await axios.get(
          "http://api.weatherapi.com/v1/current.json?key=737668b575fa4aad87235412260901&q=Paris"
        );

        setWeather(weatherFetch)
        console.log(weatherFetch);
      } catch (error) {
        console.log("Erro na requisição:", error);
      }
    }

    getWeather();
  }, []);

  return (
    <>
      <h1>Olá mundo</h1>
    </>
  );
}

export default App;
