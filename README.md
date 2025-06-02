# Gestion de Dépenses - Mini Projet Ionic React

## Application mobile de gestion de dépenses personnelles réalisée avec Ionic et React.

## Fonctionnalités principales

    - Liste des dépenses : affichage de toutes les dépenses enregistrées

    - Ajout de dépense : formulaire interactif et validé côté client

    - Suppression d’une dépense d’un simple clic

    - Graphe Camembert : visualisation de la répartition des dépenses par catégorie

    - Total cumulé des dépenses affiché en bas de page

    - Données persistantes via localStorage

    - UI responsive et look mobile grâce aux composants Ionic

## Structure du projet

    - src/pages/ExpensesList.tsx : page principale (liste + graphe + total)

    - src/pages/AddExpense.tsx : page d’ajout de dépense

    - src/components/ExpenseCard.tsx : composant carte pour chaque dépense

    - src/components/ExpensesPieChart.tsx : graphe camembert des catégories

    - src/components/Header.tsx : en-tête réutilisable avec titre

    - src/components/Footer.tsx : pied de page réutilisable

    - src/components/AddExpenseForm.tsx : formulaire d’ajout réutilisable

    - src/models/Expense.ts : interface TypeScript d’une dépense

    - src/services/expenseService.ts : gestion CRUD des dépenses en localStorage

## Installation et lancement (développement)

    - Cloner le dépôt :
    git clone https://github.com/ClementDG/gestion-depenses.git
    cd gestion-depenses

    - Installer les dépendances :
    npm install

    - Lancer l’application en mode développement :
    ionic serve

## Génération de l’APK Android (packaging mobile)

    - Compiler l’app web Ionic :
    ionic build

    - Ajouter la plateforme Android :
    npx ionic cap add android

    - Copie des fichiers de build :
    npx ionic cap copy android

    - Ouvrir le projet dans Android Studio :
    npx ionic cap open android

## Remarque :

Aucun backend n’est nécessaire : toutes les données sont stockées en local sur l’appareil.

## Architecture technique

    - React pour l’UI et la logique

    - Ionic pour le look natif mobile et la gestion du routage

    - Recharts pour le graphique camembert

    - localStorage pour persister les dépenses

## Auteur

    - Clément DA GAMA / S6 IL / AGEN

### Projet réalisé dans le cadre du module “Projet Ionic”.