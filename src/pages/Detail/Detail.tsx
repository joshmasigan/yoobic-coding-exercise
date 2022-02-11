import React from "react";
import { IonPage, IonToolbar, IonHeader, IonTitle, IonIcon, IonButtons, IonMenuButton } from "@ionic/react";
import { optionsOutline } from "ionicons/icons";
const Detail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ionTextCenter">Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};

export default Detail;
