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
};

export const UserCard = (props: UserCardProps) => {
  const [detailModal, setDetailModal] = useState({ isOpen: false });
  // would ideally have separate modal component but was unable to pass detailModal's state from custom Modal component to parent UserCard component
  return (
    <IonCard onClick={() => setDetailModal({ isOpen: true })} id={props.name}>
      <IonModal isOpen={detailModal.isOpen}>
        <IonHeader>
          <IonToolbar mode="ios" className="ion-padding">
            <IonIcon
              slot="start"
              ios={closeOutline}
              md={closeSharp}
              onClick={() => setDetailModal({ isOpen: false })}
            />
            <IonTitle className="ionTextCenter">{props.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
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
              <p>Taken in: {props.country}</p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonModal>

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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </IonCardContent>
    </IonCard>
  );
};
