import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useEffect } from "react";

import AppRouter from "./AppRouter";

const squareBookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL?.trim();
const bookingSiteMode = import.meta.env.VITE_BOOKING_SITE_MODE?.trim().toLowerCase();
const isBookingModeEnabled =
  Boolean(squareBookingUrl) &&
  (bookingSiteMode === "redirect" || bookingSiteMode === "landing");

const BookingRedirect = () => {
  useEffect(() => {
    if (squareBookingUrl) {
      window.location.replace(squareBookingUrl);
    }
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6eee2] px-6 text-center text-[#1f1a17]">
      <div className="max-w-md space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b7894e]">
          House of High Maintenance
        </p>
        <h1 className="text-3xl font-semibold">Redirecting you to booking</h1>
        <p className="text-sm leading-6 text-[#4c4038]">
          If booking does not open automatically, continue to Square using the link below.
        </p>
        {squareBookingUrl ? (
          <a
            href={squareBookingUrl}
            className="inline-flex items-center rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f6eee2] transition duration-300 hover:bg-[#322922]"
          >
            Continue to Booking
          </a>
        ) : null}
      </div>
    </main>
  );
};

const BookingLanding = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6eee2] px-6 text-center text-[#1f1a17]">
      <div className="max-w-md space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b7894e]">
          House of High Maintenance
        </p>
        <h1 className="text-3xl font-semibold">Online booking is currently hosted in Square</h1>
        <p className="text-sm leading-6 text-[#4c4038]">
          Use the button below to continue to the live booking page.
        </p>
        {squareBookingUrl ? (
          <a
            href={squareBookingUrl}
            className="inline-flex items-center rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#f6eee2] transition duration-300 hover:bg-[#322922]"
          >
            Go to Booking
          </a>
        ) : null}
      </div>
    </main>
  );
};

function App() {
  if (isBookingModeEnabled) {
    return (
      <IonApp>
        {bookingSiteMode === "landing" ? <BookingLanding /> : <BookingRedirect />}
      </IonApp>
    );
  }

  return (
    <IonApp>
      <IonReactRouter>
        <AppRouter />
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
