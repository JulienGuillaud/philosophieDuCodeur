# Cours philosophie du codeur

Pour ce cours, les consignes étaient :

1. Réaliser une fonction de tri d’untableaudevaleurnumériquepar ordre croissant ou décroissant sans utiliser de fonction par défaut des langages

   <pre>➢ triTableau(monTableau,TRI_CROISSANT|TRI_DECROISSANT)returntableauTrié;</pre>


2. Fonction qui détermine si 2 tableaux sont strictement égaux (même valeur mais pas forcément ordonnée pareil), le nombre de valeur communes, si c’est un palindrome ou si tabAcontient tabB

   <pre>➢ compareTableau(tabA,tabB)return[sontEgaux, nbValeursComm, estPalindrome, tabAContientTabB];</pre>


3. Fonction qui calcule la différence en nombre de jour entre deux dates (en chaîne de caractère sous la forme dd/mm/YYYY) sans utiliser de fonction par défaut

   <pre>➢ diffJour(dateA, dateB) : return nombreJour;</pre>


4. Validation d’une transaction comptable avec la structure de données suivante

   <pre>❖ ID : int|Montant: float| IdCommande: int| TypePaiement: int[0: espère, 1: chèque, 2 : CB] | Token: sha256 [concatligne-1 des attributs (avec token) | tokenen dur dans le code pour la première ligne]

   ➢ valideTransactions(tabTransactions) return [ligneInvalide1?, ligneInvalide2?,…]</pre>