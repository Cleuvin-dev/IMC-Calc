export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  {
    title: "Abaixo do peso - Não é legal.",
    color: "#96A3AB",
    icon: "down",
    imc: [0, 18.5],
  },
  {
    title: "Normal - Mantenha o foco.",
    color: "#0EAD69",
    icon: "up",
    imc: [18.6, 24.9],
  },
  {
    title: "Sobrepeso - Atenção.",
    color: "#E2B039",
    icon: "down",
    imc: [25, 30],
  },
  {
    title: "Obesidade - Cuidado.",
    color: "#C3423F",
    icon: "down",
    imc: [30.1, 99],
  },
];

export const calculteImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let levelCopy = { ...levels[i] };
      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }

  return null;
};
