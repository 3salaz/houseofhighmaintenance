import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar className="bg-gray-800 text-white">
        <IonTitle className="text-center text-sm">
          © {new Date().getFullYear()} House of High Maintenance
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
