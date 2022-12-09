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
   > Utilisez le contrôle de version pour suivre et gérer les modifications apportées à votre code : <br>
   Cette pratique vous permet de conserver un enregistrement de toutes les modifications apportées à votre base de code, ainsi que de savoir qui a apporté ces modifications et quand. Il est ainsi plus facile de repérer et de corriger les bogues, de revenir sur les modifications qui posent problème et de collaborer avec les autres membres de l'équipe.

   > Écrire un code propre, bien documenté et facile à maintenir : <br>
   Un code propre est facile à lire et à comprendre, et un code bien documenté comprend des commentaires clairs et concis qui expliquent ce que fait le code. L'écriture d'un code facile à maintenir signifie que vous devez structurer votre code de manière à pouvoir le mettre à jour et le modifier facilement à l'avenir.

   > Adoptez un style de codage cohérent et faites-le respecter par votre équipe : <br>
   L'établissement d'un style de codage cohérent contribue à rendre votre code plus lisible et plus facile à maintenir. Il est également plus facile pour les membres de l'équipe de travailler ensemble et de comprendre le code des autres.

   > Effectuez régulièrement des revues de code pour identifier les problèmes potentiels et améliorer la qualité du code : <br>
   Les revues de code consistent à demander aux autres membres de l'équipe d'examiner votre code afin d'identifier les problèmes potentiels et de proposer des améliorations. Cela permet de détecter rapidement les bug, d'améliorer la qualité globale de votre code et de garantir qu'il respecte les normes de codage de votre équipe.

   > Utilisez des tests automatisés pour vous assurer que votre code est correct et stable. Les tests automatisés sont des scripts pré-écrits qui vérifient l'exactitude et la stabilité de votre code : <br>
   En exécutant ces tests régulièrement, vous pouvez détecter les bug et autres problèmes avant qu'ils n'affectent votre logiciel.

   > Mettre en œuvre l'intégration et la livraison continues pour accélérer le processus de développement : <br>
   L'intégration continue consiste à construire et à tester automatiquement votre code à chaque modification, tandis que la livraison continue consiste à déployer automatiquement votre code en production lorsqu'il est prêt. Ces pratiques peuvent contribuer à réduire le temps et les efforts nécessaires pour mettre votre code entre les mains des utilisateurs.

   > Utiliser des méthodologies de développement agiles pour vous concentrer sur la fourniture rapide de valeur aux utilisateurs : <br>
   Le développement agile est un ensemble de principes et de pratiques qui mettent l'accent sur le développement itératif et incrémentiel et sur la collaboration avec les parties prenantes. En utilisant les méthodologies agiles, vous pouvez vous concentrer sur la fourniture rapide de valeur aux utilisateurs et sur l'adaptation à l'évolution des besoins.

   > Collaborer avec les autres membres de l'équipe et les parties prenantes pour vous assurer que tout le monde est sur la même longueur d'onde. La collaboration est essentielle à la réussite de tout projet de développement de logiciels. En travaillant en étroite collaboration avec les autres membres de l'équipe et les parties prenantes, vous pouvez vous assurer que tout le monde comprend les objectifs du projet et travaille dans le même sens.

   > Se tenir au courant des dernières évolutions dans votre domaine et intégrer de nouveaux outils et techniques le cas échéant : <br>
   Le domaine du développement logiciel est en constante évolution, et de nouveaux outils et techniques sont développés en permanence. En vous tenant au courant des derniers développements, vous pouvez intégrer de nouvelles idées et technologies dans votre travail, ce qui améliore votre productivité et la qualité de votre code.

   > Planifier et hiérarchiser votre travail pour vous assurer que vous travaillez d'abord sur les tâches les plus importantes : <br>
   La planification et la hiérarchisation sont essentielles pour s'assurer que vous travaillez sur les tâches les plus importantes à un moment donné. En hiérarchisant votre travail, vous pouvez vous concentrer sur les tâches qui auront le plus grand impact sur votre projet, et éviter de perdre du temps sur des tâches moins importantes.-

- Mauvaises pratiques :

   > Ne pas écrire de tests unitaires : <br>
   Cela signifie qu'il n'y a aucune garantie que le code fonctionne correctement et qu'il peut être difficile de repérer les bug.

   > Ne pas suivre les bonnes pratiques de codage : <br>
   Cela peut entraîner du code difficile à lire et à maintenir, ce qui peut entraîner des erreurs et des retards de développement.

   > Ignorer les commentaires et la documentation : <br>
   Cela peut rendre le code difficile à comprendre pour d'autres développeurs et rendre difficile la maintenance à long terme.

   > Ne pas effectuer de revues de code : <br>
   Cela peut entraîner des erreurs de code qui auraient pu être détectées et corrigées lors d'une revue de code.

   > Ne pas suivre les normes de développement : <br>
   Cela peut entraîner du code difficile à lire et à maintenir, ce qui peut entraîner des erreurs et des retards de développement.

   > Ne pas effectuer de planification ou de suivi adéquats : <br>
   Cela peut entraîner des retards de développement et des dépassements de budget.

   > Ne pas communiquer efficacement avec les autres membres de l'équipe de développement : <br>
   Cela peut entraîner des erreurs et des retards dans le développement en raison d'une mauvaise coordination.

   > Ne pas effectuer de tests adéquats avant la mise en production : <br>
   Cela peut entraîner des erreurs et des bug lorsque le logiciel est utilisé par des utilisateurs finaux.

   > Ne pas suivre les tendances et les technologies actuelles : <br>
   Cela peut entraîner du code obsolète et peu efficace, ce qui peut entraîner des retards de développement.

   > Ne pas écouter les commentaires et les suggestions des utilisateurs : <br>
   Cela peut entraîner un logiciel qui ne répond pas aux besoins réels des utilisateurs finaux, ce qui peut entraîner une mauvaise utilisation et une mauvaise réputation.

