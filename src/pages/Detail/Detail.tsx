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
import { RouteComponentProps } from "react-router";

import DetailComponent from "../../components/DetailComponent";
import { render } from "react-dom";

type DetailProps = {
  id: number;
  data: {
    name: string;
    icon: string;
    email: string;
    country: string;
  };
};

const Detail: React.FC = () => {
  return (
    <IonPage>
      <DetailComponent id={3} name="Bob" email="email" country="canada" icon="icon" />
    </IonPage>
  );
};

export default Detail;

// export const Detail = (props: DetailProps) => {
//   return (
//     <IonHeader>
//       <IonToolbar mode="ios">
//         <IonIcon slot="end" ios={optionsOutline} />
//         <IonButtons slot="start">
//           <IonMenuButton />
//         </IonButtons>
//         <IonTitle className="ionTextCenter">{props.data.name}</IonTitle>
//       </IonToolbar>
//     </IonHeader>
//   );
// };
