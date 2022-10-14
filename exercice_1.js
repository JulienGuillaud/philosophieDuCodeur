/* ------------------- EXERCICE 1 ------------------ */

// Données de test pour exercice
const UNSORTED_ARRAY = [23, 20, 11, 10, 18, 8, 23, 14, 10, 30, 12, 35, 14, 3, 26, 0, 5, 37, 5, 1];

// Fonctions
/**
 * @param {Array.<int>} tab
 * @param {String} sens
 * @returns {Array.<int>}
 */
function triTableau(tab, sens) {
   sens = sens || "CROISSANT"; // Sédurité si sens non renseigné
   for (let i = 0; i < tab.length; i++) {
      for (let j = 0; j < tab.length - 1; j++) {
         if ((sens == "CROISSANT" && tab[j] > tab[i]) || (sens == "DECROISSANT" && tab[i] > tab[j])) {
            [tab[i], tab[j]] = [tab[j], tab[i]];
         }
      }
   }
   return tab;
}

// Parse et stringify pour copier le tableau pour que la fonction Croissant ne modifie pas le tableau non trié d'origine
let croissant = triTableau(JSON.parse(JSON.stringify(UNSORTED_ARRAY)), "CROISSANT");
let decroissant = triTableau(JSON.parse(JSON.stringify(UNSORTED_ARRAY)), "DECROISSANT");

// Affichage
console.log("Tri Croissant : " + croissant);
console.log("Tri Decroissant : " + decroissant);
