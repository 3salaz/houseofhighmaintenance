import {
  IonApp,
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./App.css";

function App() {
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My Ionic App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h1>Hello, Ionic!</h1>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default App;
