import { useState } from "react";
import styles from "./App.module.css";
import leftArrowImage from "./assets/leftarrow.png";
import { GridItem } from "./components/GridItem";

import { calculteImc, Level, levels } from "./helpers/imc";

const App = () => {
  const [heightField, setHeighField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculteImc(heightField, weightField));
    } else {
      alert("Digite todos os campos!");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeighField(0);
    setWeightField(0);
  };

  const handleRedirect = () => {
    window.location.href = "https://github.com/Cleuvin-dev";
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <button className={styles.linkProfile} onClick={handleRedirect}>
            GitHub: Cleuvin-dev
          </button>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para indice de Massa Copórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa.{" "}
          </p>
          <input
            type="number"
            placeholder="Digite a sua altura. Ex> 1,5 (em mestros)"
            value={heightField > 0 ? heightField : " "}
            onChange={(e) => setHeighField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digiteo seu peso. Ex> 75.3 (em kilogramas)"
            value={weightField > 0 ? weightField : " "}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>

        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
