# Cours philosophie du codeur

Pour ce cours, les consignes étaient :

1. Réaliser une fonction de tri d’untableaudevaleurnumériquepar ordre croissant ou décroissant sans utiliser de fonction par défaut des langages

   <pre>➢ triTableau(monTableau,TRI_CROISSANT|TRI_DECROISSANT)returntableauTrié;</pre>

   [Mon exercice 1](exercice_1.js)

2. Fonction qui détermine si 2 tableaux sont strictement égaux (même valeur mais pas forcément ordonnée pareil), le nombre de valeur communes, si c’est un palindrome ou si tabAcontient tabB

   <pre>➢ compareTableau(tabA,tabB)return[sontEgaux, nbValeursComm, estPalindrome, tabAContientTabB];</pre>

   [Mon exercice 2](exercice_2.js)

3. Fonction qui calcule la différence en nombre de jour entre deux dates (en chaîne de caractère sous la forme dd/mm/YYYY) sans utiliser de fonction par défaut

   <pre>➢ diffJour(dateA, dateB) : return nombreJour;</pre>

   [Mon exercice 3](exercice_3.js)

4. Validation d’une transaction comptable avec la structure de données suivante

   <pre>❖ ID : int|Montant: float| IdCommande: int| TypePaiement: int[0: espère, 1: chèque, 2 : CB] | Token: sha256 [concatligne-1 des attributs (avec token) | tokenen dur dans le code pour la première ligne]
   
   ➢ valideTransactions(tabTransactions) return [ligneInvalide1?, ligneInvalide2?,…]</pre>

   [Mon exercice 4](exercice_4.js)

<br><br>

## Projet final

1. Réalisation d'une fiche méthodes sur les bonnes pratiques à avoir dans votre secteur/métier visé
   - 10 points lister des bonnes pratiques et 10 à ne pas faire sur votre fiche avec leurs bénéfices pour vous et l'entreprise
   - Objectif : Avoir une fiche à mettre au dessus de votre bureau pour le travail !
     - Convention de nommage
     - Respect de certaines normes liés à votre langage
     - Arborescence des fichiers et structuration
     - Outils disponibles pour le respect
2. Une interview d'une personne de votre entreprise avec rendu libre
   - Article
   - Vidéo
   - Podcast
   - ...

Mes réponses :

- Bonnes pratiques :

  > Toujours ``commenter`` le code (la ou c'est nécessaire), un code bien écrit n'a pas besoin d'être expliqué

  > Ecrire les variables const en ``UPPERCASE``

  > Nommage des fonctions en ``camelCase``

  > Nommage des variables en ``camelCase``

  > Nommage des class en ``PascalCase``

  > Privilégier un code ``lisible`` a un code compact

  > Indentation du code à ``3`` espaces

  > Permettre l'``évolution`` du code (dans la limite du raisonable)

  > Toujours utiliser un outil de ``versioning``

  > Protéger les données en ayant toujours une ``sauvegarde`` de son travail

  > Suivi des tâches et du temps de travail, pour rester ``productif`` et savoir ou on en est

  > Ne pas hésiter à prendre du recul (peut aider à se débloquer dans certains cas)

- Mauvaises pratiques :

   > Faire des heures supp non payés🙃

   > Ne pas prendre de pause (le repos c'est important)
