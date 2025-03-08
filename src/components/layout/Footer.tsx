import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar color="primary">
        <IonTitle color="light" className="text-center text-sm">
          © {new Date().getFullYear()} HOHM
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
