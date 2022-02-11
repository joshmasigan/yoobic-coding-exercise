import React from "react";
import { IonPage, IonToolbar, IonHeader, IonTitle, IonIcon, IonButtons, IonMenuButton } from "@ionic/react";
import { optionsOutline } from "ionicons/icons";

import DetailComponent from "../../components/DetailComponent";

const Detail: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ionTextCenter">LOGO</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <DetailComponent id={3} name="Bob" email="email" country="canada" icon="icon" />
    </IonPage>
  );
};

export default Detail;
