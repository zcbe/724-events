export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

//  modification de l'index de chaque mois 
export const getMonth = (date) => MONTHS[date.getMonth()];
// Définition d'une fonction getMonth qui prend une date comme argument et retourne le nom du mois correspondant en français
// La fonction utilise la méthode getMonth() de l'objet Date pour obtenir le numéro du mois (de 0 à 11)

