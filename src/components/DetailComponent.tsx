import React from "react";
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { optionsOutline } from "ionicons/icons";
import { render } from "react-dom";

type DetailItemProps = {
  id: number;
  name: string;
  icon: string;
  email: string;
  country: string;
};

class DetailItem extends React.Component<DetailItemProps> {
  render() {
    return (
      <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ionTextCenter">{this.props.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
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
  <DetailItem
    id={id}
    name={name}
    icon={icon}
    email={email}
    country={country}
  ></DetailItem>
);
