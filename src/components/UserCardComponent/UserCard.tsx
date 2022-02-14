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
  const [detailModal, setDetailModal] = useState<boolean>(false);

  // console.log(detailModal);

  // would ideally have separate modal component but was unable to pass
  // detailModal's state from custom Modal component to parent UserCard component

  const handleModal = () => {
    setDetailModal(!detailModal);
  };

  return (
    <div id="cardComponent">
      {/* Detailed Modal component */}
      {/* Detailed Modal Header */}
      <IonModal isOpen={detailModal} trigger="close">
        <IonHeader>
          <IonToolbar mode="ios" className="ion-padding">
            <IonIcon
              id="close"
              slot="start"
              ios={closeOutline}
              md={closeSharp}
              onClick={handleModal}
            />
            <IonTitle className="ionTextCenter">{props.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Detailed Modal Header end */}

        {/* Detailed Modal Body */}
        <IonCard id="detailModal">
          <IonCardHeader>
            <IonImg className="main-img" src={props.image} />
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
      {/* Detailed Modal Body end */}

      {/* Card component */}
      {/* When card clicked, open modal */}
      <IonCard onClick={handleModal} id={`${props.name}Modal`}>
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
          <img
            src={props.image}
            className="main-img"
            alt={`a photo posted by ${props.name}`}
          />
          <IonText className="ion-text-center ion-margin">
            <h2 className="subheading">{props.country}</h2>
          </IonText>
          <IonImg className="character-img"></IonImg>
          {props.description}
        </IonCardContent>
      </IonCard>
      {/* Card component end */}
    </div>
  );
};
