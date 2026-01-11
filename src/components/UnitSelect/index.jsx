import styles from "./styles.module.css";

export function UnitSelect() {
  return (
    <label htmlFor="unit-change">
      <input type="checkbox" id="unit-change" className={styles.unitSelectCheckbox} />
      <div className={styles.select}>
        <span>Cº</span>
        <span>Fº</span>
      </div>
    </label>
  );
}
