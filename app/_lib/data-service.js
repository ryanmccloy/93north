import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function saveContactForm({ name, email, message }) {
  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
    });
    console.log("✅ Contact form saved!");
  } catch (err) {
    console.error("[saveContactForm !! Error saving contact form:]", err);
    throw err; // rethrow so the hook can catch it
  }
}
