import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonList
} from "@ionic/react";

import { optionsOutline } from "ionicons/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";

import UserCard from "../../components/UserCard";
import "./Main.css";

const userAPILink: string = "https://randomuser.me/api/";
const usersToRender: number = 5;

const Main: React.FC = () => {
  interface IUser {
    name: string;
    email: string;
    icon: string;
    country: string;
  }
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    for (let i = 0; i < usersToRender; ++i) {
      (async () => {
        const res = await axios.get(userAPILink);
        let tempUser: IUser = {
          name: `${res.data.results[0].name.first} ${res.data.results[0].name.last}`,
          email: `${res.data.results[0].email}`,
          icon: `${res.data.results[0].picture.thumbnail}`,
          country: `${res.data.results[0].location.country}`,
        };
        setUserList((userList) => {
          return [...userList, tempUser];
        });
      })();
    }
  }, []);

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
          {userList.map((user, index) => {
            return (
              <IonItem key={index}>
                <UserCard
                  id={index}
                  name={user.name}
                  icon={user.icon}
                  email={user.email}
                  country={user.country}
                ></UserCard>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Main;
