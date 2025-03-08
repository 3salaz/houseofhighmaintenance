import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import React from "react";

function Home() {
  return (
    <IonGrid>
      {/* Hero Section */}
      <IonRow className="flex items-center justify-center h-64 bg-blue-500 text-white text-center">
        <IonCol size="12">
          <h1 className="text-3xl font-bold">Welcome to HOHM</h1>
          <p>Your premier salon experience</p>
        </IonCol>
      </IonRow>

      {/* Services Section */}
      <IonRow>
        <IonCol size="12" sizeMd="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Hair Styling</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Experience the best in modern hair styling techniques.
            </IonCardContent>
          </IonCard>
        </IonCol>
        <IonCol size="12" sizeMd="6">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Beauty Treatments</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Indulge in luxury beauty and spa treatments.
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>

      {/* Call to Action */}
      <IonRow className="text-center mt-6">
        <IonCol>
          <h2 className="text-2xl font-semibold">
            Book Your Appointment Today!
          </h2>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Home;
