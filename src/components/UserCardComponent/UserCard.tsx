import { useState } from "react";
import {
  IonCard,
  IonGrid,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonCardContent,
  IonImg,
  IonRow,
  IonCol,
  IonAvatar,
  IonModal,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonTitle,
} from "@ionic/react";
import { closeOutline, closeSharp } from "ionicons/icons";

import "./UserCard.css";

type UserCardProps = {
  id: number;
  name: string;
  icon: string;
  email: string;
  country: string;
  image: string;
  description: string;
};

export const UserCard = (props: UserCardProps) => {
  const [detailModal, setDetailModal] = useState({ isOpen: false });
  // would ideally have separate modal component but was unable to pass
  // detailModal's state from custom Modal component to parent UserCard component

  const handleClose = () => {
    console.log(`Value before click: ${detailModal.isOpen}`);
    setDetailModal({ isOpen: false });
    console.log(`Value after click: ${detailModal.isOpen}`);
  };

  return (
    <IonCard
      onClick={() => setDetailModal({ isOpen: true })}
      id={`${props.name}Modal`}
    >
      {/* When card clicked, open modal */}
      <IonModal isOpen={detailModal.isOpen}>
        <IonHeader>
          <IonToolbar mode="ios" className="ion-padding">
            <IonIcon
              slot="start"
              ios={closeOutline}
              md={closeSharp}
              onClick={handleClose} // Modal currently does not close when clicked -> see console
            />
            <IonTitle className="ionTextCenter">{props.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* Detailed Modal component */}
        <IonCard id="detailModal">
          <IonCardHeader>
            <IonImg src={props.image} />
            <IonGrid>
              <IonRow>
                <IonCol size="3">
                  <IonAvatar>
                    <img src={props.icon} />
                  </IonAvatar>
                </IonCol>
                <IonCol size="9">
                  <IonCardTitle>{props.name}</IonCardTitle>
                  <IonCardSubtitle>{props.email}</IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              <p>This photo was taken in: {props.country}</p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonModal>
      {/* Detailed Modal component end */}

      {/* Card component */}
      <IonCardHeader className="card-header">
        <IonGrid>
          <IonRow>
            <IonCol size="3">
              <IonAvatar>
                <img src={props.icon} />
              </IonAvatar>
            </IonCol>
            <IonCol size="9">
              <IonCardTitle>{props.name}</IonCardTitle>
              <IonCardSubtitle>{props.email}</IonCardSubtitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>
      <IonCardContent>
        <img src={props.image} className="center-img" />
        <IonText className="ion-text-center ion-margin">
          <h2 className="subheading">{props.country}</h2>
        </IonText>
        <IonImg className="character-img"></IonImg>
        {props.description}
      </IonCardContent>
      {/* Card component end */}
    </IonCard>
  );
};
