import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';

/*
  AddExpense (Page)
  -----------------
  Page d'ajout d'une nouvelle dépense.
  Affiche un en-tête et le formulaire AddExpenseForm.
*/

const AddExpense: React.FC = () => (
  <IonPage>
    <Header title="Ajouter une dépense" showBackButton={true} />
    <IonContent className="ion-padding" fullscreen>
      <AddExpenseForm />
    </IonContent>
  </IonPage>
);

export default AddExpense;
