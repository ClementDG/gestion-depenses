import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';

/*
  Header
  ------
  Composant d'en-tête réutilisable avec titre dynamique.
  Peut afficher un bouton retour en option (showBackButton).
*/

export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => (
  <IonHeader>
    <IonToolbar color="primary">
      {showBackButton && (
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      )}
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default Header;
