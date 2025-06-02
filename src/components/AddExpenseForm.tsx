import React, { useState } from 'react';
import {
  IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonList, IonText, IonToast
} from '@ionic/react';
import { addExpense } from '../services/expenseService';
import { v4 as uuidv4 } from 'uuid';

/*
  Composant AddExpenseForm
  ------------------------
  Affiche le formulaire d'ajout d'une dépense.
  - Les champs sont validés (montant numérique, catégorie obligatoire).
  - Si l'utilisateur valide, la dépense est ajoutée au localStorage via le service.
  - Affiche un message d'erreur si le formulaire est incomplet ou erroné.
*/

const categories = [
  'Alimentation', 'Transport', 'Loisirs', 'Logement', 'Autre'
];

const AddExpenseForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount)) || !category) {
      setShowToast(true);
      return;
    }
    addExpense({
      id: uuidv4(),
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString()
    });
    window.location.href = '/';
  };

  return (
    <>
      <IonList lines="none" style={{
        maxWidth: 420,
        margin: "32px auto",
        borderRadius: 16,
        boxShadow: "0 4px 32px 0 rgba(58,134,255,0.09)",
        background: "#fff"
      }}>
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
          <IonText color="primary">
            <h2 style={{ textAlign: "center", marginBottom: 24, fontWeight: 700 }}>
              Nouvelle dépense
            </h2>
          </IonText>
          <IonItem className="form-item">
            <IonLabel position="stacked">Montant (€)</IonLabel>
            <IonInput
              type="number"
              value={amount}
              onIonChange={e => setAmount(e.detail.value!)}
              required
              min="0"
              step="0.01"
              inputMode="decimal"
            />
          </IonItem>
          <IonItem className="form-item">
            <IonLabel position="stacked">Catégorie</IonLabel>
            <IonSelect
              value={category}
              placeholder="Choisis une catégorie"
              onIonChange={e => setCategory(e.detail.value!)}
              required
            >
              {categories.map(cat => (
                <IonSelectOption key={cat} value={cat}>{cat}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem className="form-item">
            <IonLabel position="stacked">Description</IonLabel>
            <IonInput
              value={description}
              onIonChange={e => setDescription(e.detail.value!)}
              maxlength={50}
            />
          </IonItem>
          <IonButton
            expand="block"
            type="submit"
            color="success"
            style={{ marginTop: 32, borderRadius: 12, fontWeight: 700, fontSize: 18, height: 48 }}
          >
            Ajouter
          </IonButton>
        </form>
      </IonList>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Veuillez remplir le montant (nombre) et la catégorie."
        duration={2000}
        color="danger"
      />
    </>
  );
};

export default AddExpenseForm;
