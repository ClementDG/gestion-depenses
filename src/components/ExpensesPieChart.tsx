import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Expense } from '../models/Expense';

/*
  ExpensesPieChart
  ----------------
  Composant d'affichage d'un graphique camembert (pie chart) des dépenses par catégorie.
  Reçoit un tableau de dépenses en props, regroupe les montants par catégorie et affiche le résultat avec recharts.
*/

const COLORS = ['#3a86ff', '#43aa8b', '#f9c74f', '#ff006e', '#adb5bd'];

const categories = [
  'Alimentation', 'Transport', 'Loisirs', 'Logement', 'Autre'
];

interface Props {
  expenses: Expense[];
}

const ExpensesPieChart: React.FC<Props> = ({ expenses }) => {
  const data = categories.map((cat, idx) => ({
    name: cat,
    value: expenses
      .filter(exp => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0)
  })).filter(item => item.value > 0);

  if (data.length === 0) return null;

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "30px auto 12px auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 18px 0 rgba(58,134,255,0.09)", paddingTop: 20 }}>
      <h3 style={{ textAlign: "center", marginBottom: 8, color: "#3a86ff", fontWeight: 700 }}>Répartition des dépenses</h3>
      <ResponsiveContainer width="100%" height={270}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={85}
            label
          >
            {data.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={v => `${v} €`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpensesPieChart;
