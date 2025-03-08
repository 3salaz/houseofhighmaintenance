import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { menuController } from "@ionic/core";

const closeMenuAndNavigate = async (path: string) => {
  await menuController.close();
  window.location.href = path;
};

const Navbar: React.FC = () => {
  return (
    <>
      {/* Side Menu */}
      <IonMenu
        side="start"
        menuId="main-menu"
        contentId="main-content"
        swipeGesture={true}
      >
        <IonContent>
          <IonList>
            <IonItem
              button
              routerLink="/home"
              onClick={() => closeMenuAndNavigate("/home")}
            >
              Home
            </IonItem>
            <IonItem
              button
              routerLink="/about"
              onClick={() => closeMenuAndNavigate("/about")}
            >
              About
            </IonItem>
            <IonItem
              button
              routerLink="/services"
              onClick={() => closeMenuAndNavigate("/services")}
            >
              Services
            </IonItem>
            <IonItem
              button
              routerLink="/contact"
              onClick={() => closeMenuAndNavigate("/contact")}
            >
              Contact
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Navbar */}
      <IonHeader>
        <IonToolbar className="bg-primary text-base flex justify-between items-center px-4">
          {/* Menu Button for Mobile */}
          <IonButtons slot="start" className="md:hidden">
            <IonMenuButton menu="main-menu" />
          </IonButtons>

          {/* Centered Logo */}
          <IonTitle className="text-center">HOHM</IonTitle>

          {/* Desktop Navigation */}
          <IonButtons slot="end" className="hidden md:flex space-x-4">
            <IonButton routerLink="/home">Home</IonButton>
            <IonButton routerLink="/about">About</IonButton>
            <IonButton routerLink="/services">Services</IonButton>
            <IonButton routerLink="/contact">Contact</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Navbar;
