import React from "react";
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
} from "@ionic/react";

const UserCard: React.FC = (props: any) => {
  return (
    <IonCard routerLink={props.key}>
      <IonCardHeader className="card-header">
        <IonGrid>
          <IonRow>
            <IonCol size="3">
              <IonAvatar>
                <img src={props.icon} />
              </IonAvatar>
            </IonCol>
            <IonCol size="7">
              <IonCardTitle>{props.name}</IonCardTitle>
              <IonCardSubtitle>{props.email}</IonCardSubtitle>
            </IonCol>
            <IonCol size="2">
              <IonText>
                <p>{props.country}</p>
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardHeader>
      <IonCardContent>
        <IonImg className="character-img"></IonImg>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </IonCardContent>
    </IonCard>
  );
};

export default UserCard;
