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
} from "@ionic/react";

import { personCircle } from "ionicons/icons";

import React from "react";


const SignIn: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  //   used separate states here but ideally would use 1 state object with username and password as vars.

  const logIn = () => {
    console.log(username);
    console.log(password);
    // add security and verification logic here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding">
        <IonIcon
          style={{ fontSize: "70px", color: "#0040ff" }}
          icon={personCircle}
        />
        <IonTitle> Sign In</IonTitle>

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
          <IonButton onClick={logIn} routerLink="/page/MasterList" shape="round" color="dark">
            Sign In
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
