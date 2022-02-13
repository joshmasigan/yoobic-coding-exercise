import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonGrid,
  IonContent,
  IonCardHeader,
  IonCard,
  IonCardContent,
} from "@ionic/react";

import { personCircle } from "ionicons/icons";

import React, { useState } from "react";

import "./SignIn.css";

const SignIn: React.FC = () => {
  interface LogInCredentials {
    username: string;
    password: string;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //   used separate states here but ideally would use 1 state object with username and password as vars.

  const logIn = () => {
    console.log(username);
    console.log(password);
    // add security and verification logic here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonTitle className="ion-text-center">Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonIcon
              style={{ fontSize: "100px", color: "#fff" }}
              icon={personCircle}
              className="center"
            />
          </IonCardHeader>
          <IonTitle className="ion-text-center">
            <h1 className="sign-in-header">Sign In</h1>
          </IonTitle>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput
                      value={username}
                      onIonChange={(e: any) => setUsername(e.target.value)}
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12">
                  <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput
                      type="password"
                      value={password}
                      onIonChange={(e: any) => setPassword(e.target.value)}
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
            <div className="ion-text-center ion-margin">
              <IonButton shape="round" color="medium" fill="outline">
                Sign Up
              </IonButton>
              <IonButton
                onClick={logIn}
                routerLink="/page/MasterList"
                shape="round"
                color="dark"
              >
                Sign In
              </IonButton>
            </div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
