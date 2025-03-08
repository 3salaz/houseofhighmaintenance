import { IonPage, IonContent } from "@ionic/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <IonPage id="main-content">
      <Navbar />
      <IonContent>{children}</IonContent>
      <Footer />
    </IonPage>
  );
};

export default Layout;
