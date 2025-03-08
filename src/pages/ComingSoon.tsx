import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
} from "@ionic/react";

const ComingSoon: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="flex flex-col items-center justify-center h-full bg-gray-100">
        <IonGrid className="max-w-xl mx-auto flex flex-col items-center justify-center h-full">
          <IonRow className="justify-center">
            <IonCol size="12" className="text-center">
              <img
                src={new URL("@assets/logo.jpg", import.meta.url).href}
                alt="HOHM Logo"
                className="w-40 mx-auto mb-6"
              />
              <h1 className="text-2xl font-bold">We’re Coming Soon!</h1>
              <p className="text-gray-600">Sign up for updates below:</p>
            </IonCol>
          </IonRow>
          <IonRow className="justify-center">
            <IonCol size="12" sizeMd="6">
              <IonInput
                type="email"
                placeholder="Enter your email"
                className="border p-2 w-full rounded-md"
              />
              <IonButton expand="full" className="mt-3">
                Notify Me
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="justify-center mt-6">
            <IonCol size="auto">
              <IonButton
                fill="clear"
                href="https://facebook.com"
                target="_blank"
              >
                Facebook
              </IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton
                fill="clear"
                href="https://instagram.com"
                target="_blank"
              >
                Instagram
              </IonButton>
            </IonCol>
            <IonCol size="auto">
              <IonButton
                fill="clear"
                href="https://twitter.com"
                target="_blank"
              >
                Twitter
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ComingSoon;
