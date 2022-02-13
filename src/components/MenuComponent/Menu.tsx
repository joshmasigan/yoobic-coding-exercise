import {
  IonAvatar,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  fileTrayStackedOutline,
  imageOutline,
  layersOutline,
  returnDownBackOutline,
  fileTrayStackedSharp,
  imageSharp,
  layersSharp,
  returnDownBackSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Master List",
    url: "/page/MasterList",
    iosIcon: layersOutline,
    mdIcon: layersSharp,
  },
  {
    title: "Dashboard",
    url: "/page/Dashboard",
    iosIcon: fileTrayStackedOutline,
    mdIcon: fileTrayStackedSharp,
  },
  {
    title: "Photos",
    url: "/page/Photos",
    iosIcon: imageOutline,
    mdIcon: imageSharp,
  },
  {
    title: "Sign Out",
    url: "/",
    iosIcon: returnDownBackOutline,
    mdIcon: returnDownBackSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
