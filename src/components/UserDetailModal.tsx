import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonModal,
  IonTitle,
  IonContent,
  IonItem
} from "@ionic/react";
import { closeOutline, closeSharp } from "ionicons/icons";
import { userInfo } from "os";

type UserDetailProps = {
  id: string;
  name: string;
  icon: string;
  email: string;
  country: string;
};

export const UserDetailModal = (props: UserDetailProps) => {
  const [myModal, setMyModal] = useState({ isOpen: false });

  const handleCloseModal = () => {
    setMyModal({ isOpen: false });
    console.log(myModal);
  };
  return (
    <IonModal isOpen={myModal.isOpen}>
      <IonHeader>
        <IonToolbar mode="ios" className="ion-padding">
          <IonIcon
            slot="start"
            ios={closeOutline}
            md={closeSharp}
            onClick={handleCloseModal}
          />
          <IonTitle className="ionTextCenter">
            {props.name}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ionTextCenter">
        <IonItem>

        </IonItem>
      </IonContent>
    </IonModal>
  );
};
