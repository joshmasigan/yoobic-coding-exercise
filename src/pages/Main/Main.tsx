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
  IonList,
} from "@ionic/react";

import { optionsOutline } from "ionicons/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { UserCard } from "../../components/UserCardComponent/UserCard";
import "./Main.css";

const userAPILink: string = "https://randomuser.me/api/";

const Main: React.FC = () => {
  // define User object
  interface IUser {
    name: string;
    email: string;
    icon: string;
    country: string;
    image: string;
    description: string;
  }
  const usersToRender: number = 5; // how many users to load

  const [userList, setUserList] = useState<IUser[]>([]); // create state for user objects array

  // On render, use axios to make API calls to randomuserAPI
  // Take JSON object and pull: name, email, icon, and country in to User object
  // Loop using usersToRender var as counter to determine users to render
  useEffect(() => {
    for (let i = 0; i < usersToRender; ++i) {
      (async () => {
        const res = await axios.get(userAPILink);
        let newUser: IUser = {
          name: `${res.data.results[0].name.first} ${res.data.results[0].name.last}`,
          email: `${res.data.results[0].email}`,
          icon: `${res.data.results[0].picture.thumbnail}`,
          country: `${res.data.results[0].location.country}`,
          image: "https://picsum.photos/300/400",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Sapien et ligula ullamcorper malesuada proin libero. Urna duis convallis convallis tellus.",
        };
        
        // add newUser object to userList state array by using spread operator
        setUserList((userList) => {
          return [...userList, newUser];
        });
      })();
    }
  }, []);

  return (
    <IonPage>
      {/* Header */}
      <IonHeader>
        <IonToolbar mode="ios">
          <IonIcon slot="end" ios={optionsOutline} />
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="ionTextCenter">Master List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ionPadding">
        <IonHeader collapse="condense"></IonHeader>
        <IonSegment>
          <IonSegmentButton>Tab 1</IonSegmentButton>
          <IonSegmentButton>Tab 2</IonSegmentButton>
          <IonSegmentButton>Tab 3</IonSegmentButton>
        </IonSegment>
        {/* Header ends */}

        {/* Map userList to generate UserCard components */}
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
                  image={user.image}
                  description={user.description}
                />
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Main;
