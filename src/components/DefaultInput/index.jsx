import { useContext } from "react";
import styles from "./styles.module.css";
import { TbZoom } from "react-icons/tb";
import { WeatherContext } from "../../contexts/WeatherContext";
import { UnitSelect } from "../UnitSelect";

export function DefaultInput() {
  const { inputSearchCity, setInputSearchCity, handleEnterInput } = useContext(WeatherContext);

  return (
    <div className={styles.inputArea}>
      <span>
        <TbZoom />
      </span>
      <input type="text" placeholder="Digite a cidade..." onChange={(e) => setInputSearchCity(e.target.value)} value={inputSearchCity} onKeyDown={(e) => handleEnterInput(e, inputSearchCity)} />
      <UnitSelect />
    </div>
  );
}
