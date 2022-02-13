import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonItem,
  IonText
} from "@ionic/react";

import { optionsOutline } from "ionicons/icons";

import React from "react";

const NotYetImplemented: React.FC = () => {
    return (
   <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ionTextCenter">LOGO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
            <IonText>
                <h1>Sorry this page has not yet been implemented.</h1>
            </IonText>
        </IonItem>
      </IonContent>
      </IonPage>
    );
}

export default NotYetImplemented;