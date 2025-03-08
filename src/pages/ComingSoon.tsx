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
  const { addEmail } = useEmail(); // Access email function
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const calculateTimeLeft = () => {
    const openingDate = new Date("2025-04-01T00:00:00").getTime(); // Set your opening date
    const now = new Date().getTime();
    const difference = openingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeout(() => setShowContent(true), 2000); // Show content after 3s animation

    return () => clearInterval(timer);
  }, []);

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
          className="max-w-xl mx-auto flex flex-col items-center justify-center h-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: showContent ? 0 : 1,
              scale: showContent ? 1.5 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className={`absolute flex items-center justify-center w-full h-full transition-opacity ${
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
                    className="w-40 mx-auto mb-6 bg-white"
                  />
                </IonCol>
              </IonRow>
              <IonRow className="justify-center">
                <IonText
                  color="secondary"
                  className="text-xl text-center font-bold pt-4"
                >
                  We’re Coming Soon
                </IonText>
              </IonRow>
              <IonRow className="justify-center mt-4">
                <IonCol
                  size="auto"
                  className="flex gap-2 items-center text-center"
                >
                  {/* Days */}
                  <motion.div
                    key={`days-${timeLeft.days}-${Date.now()}`} // Unique key fix
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold bg-[#2C3E50] text-[#F5F5F5] px-4 py-2 rounded-lg shadow-lg border border-[#B0A999]"
                  >
                    {timeLeft.days}d
                  </motion.div>

                  {/* Hours */}
                  <motion.div
                    key={`hours-${timeLeft.hours}-${Date.now()}`} // Unique key fix
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold bg-[#B0A999] text-[#2C3E50] px-4 py-2 rounded-lg shadow-lg border border-[#D4AF37]"
                  >
                    {timeLeft.hours}h
                  </motion.div>

                  {/* Minutes */}
                  <motion.div
                    key={`minutes-${timeLeft.minutes}-${Date.now()}`} // Unique key fix
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold bg-[#D4AF37] text-[#2C3E50] px-4 py-2 rounded-lg shadow-lg border border-[#B0A999]"
                  >
                    {timeLeft.minutes}m
                  </motion.div>

                  {/* Seconds */}
                  <motion.div
                    key={`seconds-${timeLeft.seconds}-${Date.now()}`} // Unique key fix
                    variants={numberVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-lg font-bold bg-[#2C3E50] text-[#D4AF37] px-4 py-2 rounded-lg shadow-lg border border-[#B0A999] animate-pulse"
                  >
                    {timeLeft.seconds}s
                  </motion.div>
                </IonCol>
              </IonRow>

              <IonRow className="justify-center">
                <IonText color="base" class="text-sm">
                  Drop your contact to get updates!
                </IonText>
              </IonRow>
              <IonRow className="justify-center w-full pt-2 pb-10">
                <IonCol size="8">
                  <IonInput
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onIonInput={(e) => setEmail(e.detail.value ?? "")}
                    className="border w-full rounded-md"
                  />

                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                  <div className="w-full flex items-center justify-center">
                    <IonButton
                      size="small"
                      className="mt-3 bg-orange-500 text-white mx-auto"
                      onClick={handleSubmit}
                    >
                      Notify Me
                    </IonButton>
                  </div>
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
