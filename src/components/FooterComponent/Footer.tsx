import { IonFooter, IonText, IonItem } from "@ionic/react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <IonFooter mode="ios" className="ion-no-border ion-padding" translucent={true}>
      <IonItem >
        <IonText>
            <p>© Joshua Masigan {currentYear}</p>
        </IonText>
      </IonItem>
    </IonFooter>
  );
};

export default Footer;
