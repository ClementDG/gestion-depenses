import React from 'react';

/*
  Footer
  ------
  Composant d'affichage du pied de page de l'application.
  Affiche le total cumulé des dépenses, passé en props.
*/

interface FooterProps {
  total: number;
}

const Footer: React.FC<FooterProps> = ({ total }) => (
  <footer>
    <div style={{
      padding: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      background: 'var(--ion-color-primary)',
      color: 'white',
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      fontSize: '1.2em'
    }}>
      Total : {total.toFixed(2)} €
    </div>
  </footer>
);

export default Footer;
