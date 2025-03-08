import { createContext, useContext, useState, ReactNode } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Define the context type
interface EmailContextType {
  addEmail: (email: string) => Promise<void>;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const addEmail = async (email: string) => {
    if (!email) return;
    try {
      setLoading(true);
      await addDoc(collection(db, "emails"), {
        email,
        timestamp: serverTimestamp(),
      });
      console.log("Email added successfully!");
    } catch (error) {
      console.error("Error adding email: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmailContext.Provider value={{ addEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  return context;
};

// https://book.squareup.com/appointments/wp2m5faff33zv7/location/LPH7PHEPKCN59/services
