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
import React, {useEffect, useState} from "react";

interface IUser {
  name: string;
  email: string;
  icon: string;
  country: string;
}

let users: IUser[] = [];

const userAPILink: string = "https://randomuser.me/api/";
const usersToRender: number = 5;

for (let i = 0; i < usersToRender; ++i) {
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
  const [userList, setUserList] = useState<IUser[] | undefined>([]);
  const [user, setUser] = useState<IUser | undefined>();
  // const [names, setNames] = useState<Array<string>([]);
  const [userLoaded, setUserLoaded] = useState<boolean>(false);

  const fetchUser = async () => {
    try {
      let response = await fetch(userAPILink);
      let json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.log(error);
      return { success: false };
    }
  };

    useEffect(() => {
    (async () => {
      setUserLoaded(false);
      let res = await fetchUser();
      if (res.success) {
        setUser(res.data.results[0]);
        // use spread operator to add users to userList
        setUserLoaded(true);
      }
    })();
  }, []);

  console.log(user);

  // useEffect(() => {
  //   for(let i = 0; i < usersToRender; ++i){
  //     fetch(userAPILink)
  //   .then(response => response.json()
  //     .then(json => {
  //       const user: IUser{
  //         name: json.data.results[0].name.first,
  //       }
  //     })
  //   .then(json => setNames(`${json.results[0].name.first} ${json.results[0].name.last}`)));
  //   .then(json => console.log(`${json.results[0].name.first} ${json.results[0].name.last}`)));
  //   }

  // }, [])

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
                <IonCard routerLink={`detail/${index}`}>
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
      </IonContent>
    </IonPage>
  );
};

export default Main;
