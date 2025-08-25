import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function saveContactForm({ name, email, phone, message }) {
  try {
    await addDoc(collection(db, "contacts"), {
      name: String(name),
      email: String(email),
      phone: String(phone), // always a string
      message: String(message),
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.error("[saveContactForm !! Error saving contact form:]", err);
    throw err; // rethrow so the hook can catch it
  }
}
