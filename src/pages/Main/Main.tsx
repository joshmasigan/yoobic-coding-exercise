import {
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonCardSubtitle,
  IonAvatar,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonList,
} from "@ionic/react";
import { useParams } from "react-router";
import { options, optionsOutline, optionsSharp } from "ionicons/icons";
import "./Main.css";
import UserCard from "../../components/UserCard";
import axios from "axios";
import React from "react";

interface User {
  name: string;
  email: string;
  icon: string;
  country: string;
}

let users: User[] = [];

const userAPILink: string = "https://randomuser.me/api/";

for (let i = 0; i < 3; ++i) {
  axios.get(userAPILink).then((response) =>
    users.push({
      name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
      email: response.data.results[0].email,
      icon: response.data.results[0].picture.thumbnail,
      country: response.data.results[0].location.country,
    })
  );
}

const Main: React.FC = () => {
  const [userList, setUserList] = React.useState<User[]>([]);

  const avatarLink: string =
    "https://images.unsplash.com/photo-1613254026301-71fd1a7fd020?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHlvZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ionTextCenter">LOGO</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ionPadding">
        <IonHeader collapse="condense"></IonHeader>
        <IonSegment>
          <IonSegmentButton>Tab 1</IonSegmentButton>
          <IonSegmentButton>Tab 2</IonSegmentButton>
          <IonSegmentButton>Tab 3</IonSegmentButton>
        </IonSegment>
        <IonList>
          {users.map((user, index) => {
            return (
              <IonItem key={index}>
                <IonCard routerLink={`/detail/${index}`}>
                  <IonCardHeader className="card-header">
                    <IonGrid>
                      <IonRow>
                        <IonCol size="3">
                          <IonAvatar>
                            <img src={user.icon} />
                          </IonAvatar>
                        </IonCol>
                        <IonCol size="9">
                          <IonCardTitle>{user.name}</IonCardTitle>
                          <IonCardSubtitle>{user.email}</IonCardSubtitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <IonLabel>{user.country}</IonLabel>
                    </IonText>
                    <IonImg className="character-img"></IonImg>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </IonCardContent>
                </IonCard>
              </IonItem>
            );
          })}
        </IonList>

        <IonTitle>Hello World</IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Main;
