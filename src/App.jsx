import { DefaultInput } from "./components/DefaultInput";
import { Container } from "./components/Container";
import { WeatherDisplay } from "./components/WeatherDisplay";

function App() {
  return (
    <>
      <Container>
        <DefaultInput />
      </Container>
      <Container>
        <WeatherDisplay />
      </Container>
    </>
  );
}

export default App;
