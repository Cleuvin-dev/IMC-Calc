import downdImage from "../../assets/down.png";
import upImage from "../../assets/up.png";
import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: item.color }}>
      <div className={styles.gridIcon}>
        <img
          src={item.icon === "up" ? upImage : downdImage}
          alt=""
          width="30"
        />
      </div>
      <div className={styles.gridTitle}>{item.title}</div>
      {item.yourImc && (
        <div className={styles.yourImc}>
          {" "}
          Seu IMC está em: {item.yourImc} kg/m²
        </div>
      )}
      <div className={styles.gridInfo}>
        <>
          IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
