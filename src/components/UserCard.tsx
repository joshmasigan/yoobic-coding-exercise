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
  IonLabel,
} from "@ionic/react";
import { render } from "react-dom";

type UserCardProps = {
  id: number;
  name: string;
  icon: string;
  email: string;
  country: string;
};

class UserCard extends React.Component<UserCardProps> {
  render() {
    return (
      <IonCard routerLink={`detail/${this.props.name}`} id={this.props.name}>
        <IonCardHeader className="card-header">
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <IonAvatar>
                  <img src={this.props.icon} />
                </IonAvatar>
              </IonCol>
              <IonCol size="9">
                <IonCardTitle>{this.props.name}</IonCardTitle>
                <IonCardSubtitle>{this.props.email}</IonCardSubtitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
        <IonCardContent>
          <IonText>
            <IonLabel>{this.props.country}</IonLabel>
          </IonText>
          <IonImg className="character-img"></IonImg>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </IonCardContent>
      </IonCard>
    );
  }
}

export default ({
  id,
  name,
  icon,
  email,
  country,
}: {
  id: number;
  name: string;
  icon: string;
  email: string;
  country: string;
}) => (
  <UserCard
    id={id}
    name={name}
    icon={icon}
    email={email}
    country={country}
  ></UserCard>
);
