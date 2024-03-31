export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// Ajout +1 pour avoir le bon mois affiché car tableau commence à 0
export const getMonth = (date) => MONTHS[date.getMonth() +1];
// Définition d'une fonction getMonth qui prend une date comme argument et retourne le nom du mois correspondant en français
// La fonction utilise la méthode getMonth() de l'objet Date pour obtenir le numéro du mois (de 0 à 11)
// En ajoutant 1 à ce numéro, on obtient un numéro de mois de 1 à 12, correspondant aux clés de l'objet MONTHS
// Ainsi, la fonction retourne le nom du mois correspondant à ce numéro
