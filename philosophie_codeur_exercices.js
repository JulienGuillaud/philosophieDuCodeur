/*
   EXERCICE 1
*/

// Données de test pour exercice
const unsortedArray = [23, 20, 11, 10, 18, 8, 23, 14, 10, 30, 12, 35, 14, 3, 26, 0, 5, 37, 5, 1];

// Fonctions
/**
 * @param {Array.<int>} tab
 * @param {String} sens
 * @returns {Array.<int>}
 */
function triTableau(tab, sens) {
   sens = sens || "CROISSANT"; // Sédurité si sens non renseigné
   for(let i = 0; i < tab.length; i++) {
      for(let j = 0; j < tab.length -1 ; j++) {
         if((sens == "CROISSANT" && tab[j] > tab[i]) || (sens == "DECROISSANT" && tab[i] > tab[j])) {
            [tab[i], tab[j]] = [tab[j], tab[i]];
         }
      }
   }
   return tab;
}

// Parse et stringify pour copier le tableau pour que la fonction Croissant ne modifie pas le tableau non trié d'origine
let croissant = triTableau(JSON.parse(JSON.stringify(unsortedArray))  , "CROISSANT");
let decroissant = triTableau(JSON.parse(JSON.stringify(unsortedArray)), "DECROISSANT");

// Affichage
console.log("Tri Croissant : "+croissant);
console.log("Tri Decroissant : "+decroissant);



/*
   EXERCICE 2
*/


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


/*
   EXERCICE 3
*/

// Données de test pour exercice
let dateA = "01/04/2020";
let dateB = "16/07/2020";
let dateC = "23/02/2021";


/**
 * @param {String} dateA
 * @param {String} dateB
 * @return {int} nombre de jour entre les 2 dates
 */
function diffJour(dateA, dateB){
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
   if(aData.annee > bData.annee) {
      diffAnnee = aData.annee - bData.annee;
      diffMois = aData.mois - bData.mois;
      diffJour = aData.jour - bData.jour;
   }else{
      diffAnnee = bData.annee - aData.annee
      diffMois = bData.mois -  aData.mois
      diffJour = bData.jour - aData.jour
   }
   var nbJour = (diffAnnee * 365) + (diffMois * 30) + diffJour;
   return nbJour;
}

console.log("\n------------- DATES ------------");

var diffAB = diffJour(dateA, dateB);
console.log("Diff entre "+dateA+" et "+dateB+" : "+diffAB+" jours");

var diffAC = diffJour(dateA, dateC);
console.log("Diff entre "+dateA+" et "+dateC+" : "+diffAC+" jours");



/*
   EXERCICE 4
*/


function hash(string) {
   var hashVal = 0;
   if (string.length == 0) return hashVal;
   for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      hashVal = ((hashVal << 5) - hashVal) + char;
      hashVal = hashVal & hashVal;
   }
   return hashVal;
}


class Transaction{
   constructor(id, montant, idCommande, typePaiement, token){
      this.id = id;
      this.montant = montant;
      this.idCommande = idCommande;
      this.typePaiement = typePaiement;
      this.token = token;
   }

   getTransaction(){
      return {
         id: this.id,
         montant: this.montant,
         idCommande: this.idCommande,
         typePaiement: this.typePaiement,
         token: this.token
      }
   }
   getToken(){
      return this.token
   }
}

class TransactionListBuilder{
   constructor(id, montant, idCommande, typePaiement, firstToken){
      var newTransaction = new Transaction(id, montant, idCommande, typePaiement, firstToken);
      // transactionArray.push(newTransaction);
      this.transactionArray = [newTransaction];
   }

   addTransaction(id, montant, idCommande, typePaiement, forceInvalidToken){
      forceInvalidToken = forceInvalidToken || false;
      // Generer hash
      var lastTransactionHash = this.transactionArray[this.transactionArray.length - 1].getToken();
      var newHashToken = hash(id+montant+idCommande+typePaiement+lastTransactionHash);
      if(forceInvalidToken) newHashToken = "INVALID_TOKEN";
      var newTransaction = new Transaction(id, montant, idCommande, typePaiement, newHashToken);
      this.transactionArray.push(newTransaction);
   }

   getTransactionlist(){
      return this.transactionArray
   }
}

function valideTransactions(tabTransactions){
   transactionsInvalides = [];
   if(tabTransactions.length > 0) {
      for(let i = tabTransactions.length -1; i >= 0; i--) {
         if(i > 0){
            let tokenCalcule = hash(tabTransactions[i].id+tabTransactions[i].montant+tabTransactions[i].idCommande+tabTransactions[i].typePaiement+tabTransactions[i-1].getToken())
            console.log("Token transaction "+(i+1)+" : "+tabTransactions[i].getToken());
            console.log("Token calculé "+(i)+" : "+tokenCalcule);
            if(tabTransactions[i].getToken() != tokenCalcule){
               console.log("Transaction "+(i+1)+" invalide");
               transactionsInvalides.push(tabTransactions[i]);
            }
         }else{
            break;
         }
      }
   }
   return transactionsInvalides;
}



let transactionBuilder = new TransactionListBuilder(1, 100, 1, 0, "123456789"); // Declaration du bloc avec la 1ere transaction
transactionBuilder.addTransaction(2, 150, 2, 0);
transactionBuilder.addTransaction(3, 452, 3, 1, true);

var transactionList = transactionBuilder.getTransactionlist();
var transactionInvalides = valideTransactions(transactionList);

console.log("\n------------- TRANSACTIONS ------------");
console.log("transactionList: ");
console.log(transactionList);
console.log("transactionInvalides: ");
console.log(transactionInvalides);




