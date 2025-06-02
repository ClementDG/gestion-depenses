import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/react';
import { trash, cash } from 'ionicons/icons';
import { Expense } from '../models/Expense';

/*
  ExpenseCard
  -----------
  Composant qui affiche une dépense individuelle sous forme de carte.
  Affiche la catégorie, le montant, la description, la date et un bouton pour supprimer.
*/

const categoryColors: { [key: string]: string } = {
  Alimentation: 'warning',
  Transport: 'secondary',
  Loisirs: 'tertiary',
  Logement: 'primary',
  Autre: 'medium',
};

interface ExpenseCardProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense, onDelete }) => (
  <IonCard className="expense-card">
    <IonCardHeader>
      <IonCardTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>
          <IonIcon icon={cash} color={categoryColors[expense.category] || 'medium'} style={{ marginRight: 8, fontSize: 22 }} />
          {expense.category}
        </span>
        <span style={{ fontWeight: 'bold', color: 'var(--ion-color-primary)' }}>
          {expense.amount.toFixed(2)} €
        </span>
      </IonCardTitle>
    </IonCardHeader>
    <IonCardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: '0.97em', color: '#444' }}>{expense.description}</div>
        <div style={{ fontSize: '0.85em', color: '#999' }}>{new Date(expense.date).toLocaleDateString()}</div>
      </div>
      <IonIcon
        icon={trash}
        color="danger"
        style={{ fontSize: 24, cursor: 'pointer' }}
        onClick={() => onDelete(expense.id)}
      />
    </IonCardContent>
  </IonCard>
);

export default ExpenseCard;
