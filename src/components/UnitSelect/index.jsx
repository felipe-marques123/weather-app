import { useContext } from "react";
import styles from "./styles.module.css";
import { WeatherContext } from "../../contexts/WeatherContext";

export function UnitSelect() {
  const { changeUnitSystem } = useContext(WeatherContext);

  return (
    <label htmlFor="unit-change">
      <input
        type="checkbox"
        id="unit-change"
        className={styles.unitSelectCheckbox}
        onChange={changeUnitSystem}
      />
      <div className={styles.select}>
        <span>Cº</span>
        <span>Fº</span>
      </div>
    </label>
  );
}
