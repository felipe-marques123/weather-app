import { FaCloudSun, FaWind } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";

import styles from "./styles.module.css";

export function WeatherFeeling() {
  return (
    <ul className={styles.feeling}>
      <li>
        <FaCloudSun />
        <span>Sensação: 24º</span>
      </li>
      <li>
        <FaWind />
        <span>Vento: 12 km/h</span>
      </li>
      <li>
        <IoIosWater />
        <span>Umidade: 65%</span>
      </li>
    </ul>
  );
}
