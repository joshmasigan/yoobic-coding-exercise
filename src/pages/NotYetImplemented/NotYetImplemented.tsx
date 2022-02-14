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

type title = {
  title: string;
}

export const NotYetImplemented = (props: title) => {
    return (
   <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ion-text-center">LOGO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
            <IonText className="ion-text-center">
                <h1>Sorry this page has not yet been implemented.</h1>
            </IonText>
        </IonItem>
      </IonContent>
      </IonPage>
    );
}

export default NotYetImplemented;