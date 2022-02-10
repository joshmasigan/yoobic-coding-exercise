import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";
import Detail from "./pages/Detail/Detail";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/pages/MasterList" component={Main} />
            <Route path="/pages/detail/:id" component={Detail} />
            <Route exact path="/pages/" component={SignIn} />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
