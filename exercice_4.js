/* ------------------- EXERCICE 4 ------------------ */

/**
 * 
 * @param {String} str
 * @returns {String} hashVal
 */
function hash(str) {
   var hashVal = 0;
   if (str.length == 0) return hashVal;
   for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hashVal = ((hashVal << 5) - hashVal) + char;
      hashVal = hashVal & hashVal;
   }
   return hashVal;
}


class Transaction {
   constructor(id, montant, idCommande, typePaiement, token) {
      this.id = id;
      this.montant = montant;
      this.idCommande = idCommande;
      this.typePaiement = typePaiement;
      this.token = token;
   }

   /**
    * 
    * @returns {Object} transaction
    */
   getTransaction() {
      return {
         id: this.id,
         montant: this.montant,
         idCommande: this.idCommande,
         typePaiement: this.typePaiement,
         token: this.token
      }
   }
   /**
    * 
    * @returns {String} token
    */
   getToken() {
      return this.token
   }
}

class TransactionListBuilder {
   constructor(id, montant, idCommande, typePaiement, firstToken) {
      var newTransaction = new Transaction(id, montant, idCommande, typePaiement, firstToken);
      // transactionArray.push(newTransaction);
      this.transactionArray = [newTransaction];
   }

   /**
    * 
    * @param {int} id
    * @param {int} montant
    * @param {int} idCommande
    * @param {int} typePaiement
    * @param {boolean} forceInvalidToken
    */
   addTransaction(id, montant, idCommande, typePaiement, forceInvalidToken) {
      forceInvalidToken = forceInvalidToken || false;
      // Generer hash
      var lastTransactionHash = this.transactionArray[this.transactionArray.length - 1].getToken();
      var newHashToken = hash(id + montant + idCommande + typePaiement + lastTransactionHash);
      if (forceInvalidToken) newHashToken = "INVALID_TOKEN";
      var newTransaction = new Transaction(id, montant, idCommande, typePaiement, newHashToken);
      this.transactionArray.push(newTransaction);
   }

   /**
    * 
    * @returns {Array} transactionArray
    */
   getTransactionlist() {
      return this.transactionArray
   }
}

/**
 * 
 * @param {Array.<Transaction>} tabTransactions 
 * @returns 
 */
function valideTransactions(tabTransactions) {
   transactionsInvalides = [];
   if (tabTransactions.length > 0) {
      for (let i = tabTransactions.length - 1; i >= 0; i--) {
         if (i > 0) {
            let tokenCalcule = hash(tabTransactions[i].id + tabTransactions[i].montant + tabTransactions[i].idCommande + tabTransactions[i].typePaiement + tabTransactions[i - 1].getToken())
            if (tabTransactions[i].getToken() != tokenCalcule) {
               transactionsInvalides.push(tabTransactions[i]);
            }
         } else {
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
console.log("\n\ntransactionInvalides: ");
console.log(transactionInvalides);
