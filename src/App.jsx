import { DefaultInput } from "./components/DefaultInput";
import { Container } from "./components/Container";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { FavoritesDisplay } from "./components/FavoritesDisplay";
import { HistoryDisplay } from "./components/HistoryDisplay";
import { useContext } from "react";
import { WeatherContext } from "./contexts/WeatherContext";

function App() {
  const { state } = useContext(WeatherContext);

  return (
    <>
      <Container>
        <DefaultInput />
      </Container>
      {state.currentCity && (
        <Container>
          <WeatherDisplay />
        </Container>
      )}
      <Container>
        <FavoritesDisplay />
      </Container>
      <Container>
        <HistoryDisplay />
      </Container>
    </>
  );
}

export default App;
