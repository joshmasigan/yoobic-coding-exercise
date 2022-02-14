import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Menu from "./components/MenuComponent/Menu";
import SignIn from "./pages/SignIn/SignIn";
import Main from "./pages/Main/Main";

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
import NotYetImplemented from "./pages/NotYetImplemented/NotYetImplemented";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
          <Menu />
          <IonRouterOutlet id="main">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/page/MasterList" component={Main} />
            <Route exact path="/page/Dashboard" component={NotYetImplemented} />
            <Route exact path="/page/Photos" component={NotYetImplemented} />
            <Route exact path="/page/Chat" component={NotYetImplemented} />
          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
