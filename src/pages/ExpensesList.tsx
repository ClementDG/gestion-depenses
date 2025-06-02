import React, { useEffect, useState } from 'react';
import {
  IonPage, IonContent, IonIcon, IonFab, IonFabButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { getExpenses, deleteExpense } from '../services/expenseService';
import { Expense } from '../models/Expense';
import { addCircle, cash } from 'ionicons/icons';
import ExpensesPieChart from '../components/ExpensesPieChart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpenseCard from '../components/ExpenseCard';

/*
  ExpensesList (Page)
  -------------------
  Page principale de l'application.
  Affiche la liste des dépenses sous forme de cartes,
  le graphique camembert des catégories, le total et un bouton pour ajouter une dépense.
  Gère la suppression des dépenses et la récupération depuis le localStorage.
*/

const ExpensesList: React.FC = () => {
  const history = useHistory();
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    setExpenses(getExpenses());
  }, []);

  const handleDelete = (id: string) => {
    deleteExpense(id);
    setExpenses(getExpenses());
  };

  const getTotal = () => {
    return expenses.reduce((total, exp) => total + exp.amount, 0);
  };

  return (
    <IonPage>
      <Header title="Mes Dépenses" />
      <IonContent fullscreen>
        <ExpensesPieChart expenses={expenses} />

        {expenses.length === 0 ? (
          <div className="ion-padding" style={{ textAlign: 'center', color: '#888' }}>
            <IonIcon icon={cash} style={{ fontSize: 48, marginBottom: 10 }} />
            <div>Aucune dépense enregistrée.</div>
          </div>
        ) : (
          expenses.map(exp => (
            <ExpenseCard key={exp.id} expense={exp} onDelete={handleDelete} />
          ))
        )}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="success" onClick={() => history.push('/add')}>
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      <Footer total={getTotal()} />
    </IonPage>
  );
};

export default ExpensesList;
