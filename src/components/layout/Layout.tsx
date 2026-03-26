import type { ReactNode } from "react";
import { IonContent, IonPage } from "@ionic/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <IonPage className="hhm-shell">
      <Navbar />
      <IonContent id="main-content" className="hhm-content">
        <div className="min-h-full">
          {children}
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Layout;
