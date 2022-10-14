/* ------------------- EXERCICE 3 ------------------ */

// Données de test pour exercice
let dateA = "01/04/2020";
let dateB = "16/07/2020";
let dateC = "23/02/2021";


/**
 * @param {String} dateA
 * @param {String} dateB
 * @return {int} nombre de jour entre les 2 dates
 */
function diffJour(dateA, dateB) {
   var aSplitted = dateA.split("/");
   var aData = {
      jour: Number(aSplitted[0]),
      mois: Number(aSplitted[1]),
      annee: Number(aSplitted[2])
   }

   var bSplitted = dateB.split("/");
   var bData = {
      jour: Number(bSplitted[0]),
      mois: Number(bSplitted[1]),
      annee: Number(bSplitted[2])
   }

   var diffAnnee = 0;
   var diffMois = 0;
   var diffJour = 0;

   // On pars de la date la plus grande
   if (aData.annee > bData.annee) {
      diffAnnee = aData.annee - bData.annee;
      diffMois = aData.mois - bData.mois;
      diffJour = aData.jour - bData.jour;
   } else {
      diffAnnee = bData.annee - aData.annee
      diffMois = bData.mois - aData.mois
      diffJour = bData.jour - aData.jour
   }
   var nbJour = (diffAnnee * 365) + (diffMois * 30) + diffJour;
   return nbJour;
}

console.log("\n------------- DATES ------------");

var diffAB = diffJour(dateA, dateB);
console.log("Diff entre " + dateA + " et " + dateB + " : " + diffAB + " jours");

var diffAC = diffJour(dateA, dateC);
console.log("Diff entre " + dateA + " et " + dateC + " : " + diffAC + " jours");
