import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import AppRouter from "./AppRouter";

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <AppRouter />
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
