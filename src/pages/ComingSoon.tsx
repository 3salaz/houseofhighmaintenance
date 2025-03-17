import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonInput,
  IonIcon,
  IonText,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import { logoInstagram } from "ionicons/icons";
import { useEmail } from "../context/EmailContext"; // Import context

const ComingSoon: React.FC = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every 1 minute instead of every second

    setTimeout(() => setShowContent(true), 2000); // Show content after animation

    return () => clearInterval(timer);
  }, []);
  const [showContent, setShowContent] = useState(false);
  const { addEmail } = useEmail(); // Access email function
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const calculateTimeLeft = () => {
    const openingDate = new Date("2025-04-01T00:00:00").getTime(); // Set your opening date
    const now = new Date().getTime();
    const difference = openingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const handleSubmit = async () => {
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    await addEmail(email);
    setEmail(""); // Clear input after submission
    alert("Thank you for signing up!");
  };

  const numberVariants = {
    initial: { opacity: 0, y: -20, scale: 0.2 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: 20, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <IonPage>
      <IonContent
        color="light"
        className="relative flex items-center justify-center h-full overflow-hidden"
      >
        <IonGrid
          color="secondary"
          className="mx-auto flex flex-col items-center justify-center h-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: showContent ? 0 : 1,
              scale: showContent ? 1.5 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={`absolute  container flex items-center justify-center w-full h-full transition-opacity ${
              showContent ? "hidden" : "flex"
            }`}
          >
            <motion.img
              src={
                new URL("@assets/logo-transparent.png", import.meta.url).href
              }
              alt="HOHM Logo"
              className="w-40"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: 0 }}
            />
          </motion.div>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full"
            >
              <IonRow className="justify-center">
                <IonCol size="12" className="text-center">
                  <img
                    src={
                      new URL("@assets/logo-transparent.png", import.meta.url)
                        .href
                    }
                    alt="HOHM Logo"
                    className="w-40 mx-auto mb-6"
                  />
                </IonCol>
              </IonRow>

              <IonRow className="justify-center">
                <IonText
                  color="secondary"
                  className="text-xl text-center font-bold pt-4"
                >
                  Coming Soon
                </IonText>
              </IonRow>

              <IonRow className="justify-center mt-4">
                <IonCol
                  size="auto"
                  className="flex gap-2 items-center text-center px-4 rounded-md"
                >
                  {/* Days */}
                  <motion.div
                    key={`days-${timeLeft.days}`} // Unique key for animation
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold text-[#2C3E50] py-2 rounded-lg"
                  >
                    {timeLeft.days} days
                  </motion.div>

                  {/* Hours */}
                  <motion.div
                    key={`hours-${timeLeft.hours}`} // Unique key for animation
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold py-2 rounded-lg "
                  >
                    {timeLeft.hours} hours
                  </motion.div>

                  {/* Minutes */}
                  <motion.div
                    key={`minutes-${timeLeft.minutes}`} // Unique key for animation
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold text-[#2C3E50] py-2 rounded-lg"
                  >
                    {timeLeft.minutes} m
                  </motion.div>
                </IonCol>
              </IonRow>

              <IonRow className="justify-center">
                <IonText color="base" class="text-sm">
                  Drop your contact to get updates!
                </IonText>
              </IonRow>

              <IonRow className="justify-center w-full pt-4 px-8 pb-10 max-w-xl mx-auto">
                <IonCol size="12">
                  <IonInput
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onIonInput={(e) => setEmail(e.detail.value ?? "")}
                    className="border-b w-full border-slate-200 text-slate-200"
                  />

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                  <div className="w-full flex flex-col items-center justify-center">
                    <IonButton
                      size="small"
                      className="mt-3 bg-orange-500 text-white mx-auto"
                      onClick={handleSubmit}
                    >
                      Notify Me
                    </IonButton>
                  </div>
                  <div></div>
                </IonCol>
              </IonRow>
              <IonRow class="justify-center align-center w-full pt-4 pb-10 max-w-xl mx-auto">
                <IonCol size="12" class="flex items-center justify-center">
                  <IonText color="primary" class="text-sm text-center">
                    For bookings, visit the link below!
                  </IonText>
                </IonCol>
                <IonCol size="12" class="flex items-center justify-center">
                  <IonButton
                    fill="clear"
                    color="secondary"
                    size="small"
                    className="mt-3 mx-auto"
                  >
                    <a
                      className="secondary-link-text"
                      href="http://app.squareup.com/appointments/book/wp2m5faff33zv7/LPH7PHEPKCN59/start"
                    >
                      Booking Link
                    </a>
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow className="justify-center mt-4 mx-auto w-full ion-align-items-end">
                <IonCol size="auto">
                  <IonButton
                    fill="outline"
                    shape="round"
                    href="https://www.instagram.com/houseofhighmaintenance/p/DGzayueR6fc/"
                    target="_blank"
                  >
                    <IonIcon slot="icon-only" icon={logoInstagram}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
            </motion.div>
          )}
        </IonGrid>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default ComingSoon;
