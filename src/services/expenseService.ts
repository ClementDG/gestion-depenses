import { Expense } from '../models/Expense';

const STORAGE_KEY = 'expenses';

/*
  expenseService
  --------------
  Service utilitaire pour gérer les dépenses dans le localStorage du navigateur.
  Permet de récupérer, ajouter et supprimer des dépenses de façon persistante.
*/

// Récupère la liste des dépenses depuis le localStorage
export const getExpenses = (): Expense[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Ajoute une nouvelle dépense dans le localStorage
export const addExpense = (expense: Expense): void => {
  const expenses = getExpenses();
  expenses.push(expense);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};

// Supprime une dépense (par id) du localStorage
export const deleteExpense = (id: string): void => {
  const expenses = getExpenses().filter(exp => exp.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
};
