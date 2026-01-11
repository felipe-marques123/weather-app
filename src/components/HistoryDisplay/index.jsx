import { HistoryBlock } from "../HistoryBlock";
import { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

import styles from "./styles.module.css";

export function HistoryDisplay() {
  const { state } = useContext(WeatherContext);

  return (
    <div className={styles.historyDisplay}>
      <div className={styles.header}>
        <h3>Buscas Recentes</h3>
      </div>
      <div className={styles.body}>
        {state.recentSearches.map((item, index) => (
          <HistoryBlock name={item} key={`${item}-${index}`} />
        ))}
      </div>
    </div>
  );
}
