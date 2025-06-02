/*
  Expense (interface)
  -------------------
  Décrit la structure d'une dépense dans l'application :
  - id : identifiant unique
  - amount : montant de la dépense
  - category : catégorie de la dépense
  - description : (optionnel) texte descriptif
  - date : date de création
*/

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description?: string;
  date: string;
}
