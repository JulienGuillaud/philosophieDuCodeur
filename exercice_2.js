/* ------------------- EXERCICE 2 ------------------ */

// Données de test pour exercice
const defaultArray1 = [2, 6, 8, 0, 3, 5, 9, 7, 4, 1];
const defaultArray1Palindrome = [2, 6, 8, 0, 3, 5, 9, 7, 4, 1].reverse();
const defaultArray2 = [6, 2, 8, 4, 0, 1, 9, 3, 5, 7];
const defaultArray3 = [13, 86]


// Fonctions
/**
 * @param {Array.<int>} array1
 * @param {Array.<int>} array2
 * @return {Array.<{estEgal: boolean, nbValeurComm: int, estPalindrome: boolean, tabAContientTabB: boolean}>}
 */
function compareArray(array1, array2) {
   let nbValeurComm = 0;
   let estEgal = true;
   let estPalindrome = true;
   let tabAContientTabB = true;

   for(let i = 0; i < array1.length; i++) {
      /// Les 2 array ne sont pas egaux si il y une valeur différente au même index
      if(array1[i] != array2[i]) {
         estEgal = false;
      }

      // Parcours inverse pour vérifier si palindrome, pas un palindrome si il y une valeur différente
      if(array1[i] != array2[array2.length - i -1]) {
         estPalindrome = false;
      }
      // Parcours de l'array 2 pour vérifier si il y a une valeur en commun
      for(let j = 0; j < array2.length; j++) {
         if(array1[i] == array2[j]) {
            nbValeurComm++;
         }
      }
      // Pour chaque valeur de l'array 1, on vérifie si elle est dans l'array 2
      if(array2.indexOf(array1[i]) == -1) {
         tabAContientTabB = false;
      }
   }
   return [estEgal, nbValeurComm, estPalindrome, tabAContientTabB];
}

function prettyDisplay(resultArray){
   console.log("\nEst Egal : "+resultArray[0]);
   console.log("Nb Valeur Comm : "+resultArray[1]);
   console.log("Est Palindrome : "+resultArray[2]);
   console.log("Tab A Contient Tab B : "+resultArray[3]);
}


// Affichage
console.log("\n----------- DIFFERENTS -----------");
let arrayDifferents = compareArray(defaultArray1, defaultArray3);
prettyDisplay(arrayDifferents);

console.log("\n---------- PALINDROMES ----------");
let arrayPalindrome = compareArray(defaultArray1, defaultArray1Palindrome);
prettyDisplay(arrayPalindrome);

console.log("\n------------- EGAUX ------------");
let arrayEgaux = compareArray(defaultArray1, defaultArray1);
prettyDisplay(arrayEgaux);
