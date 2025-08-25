"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { saveContactForm } from "../data-service";

export default function useContactFormRequest() {
  const [loading, setLoading] = useState(false);

  const sendContactFormRequest = async (data) => {
    setLoading(true);

    try {
      await toast.promise(
        saveContactForm(data),
        {
          loading: "Sending message...",
          success: "Message sent successfully! We will be in touch soon.",
          error:
            "Failed to send message. Please try again or contact us at ryan@93northstudio.com",
        },
        {
          style: {
            border: `1px solid var(--color-accent)`,
            color: "var(--color-accent)",
            padding: "16px",
            borderRadius: "8px",
          },
          iconTheme: {
            primary: "var(--color-accent)",
            secondary: "#FFFAEE",
          },
          duration: 5000,
        }
      );
      return true;
    } catch (error) {
      console.error("[useContactFormRequest !! Custom Hook Error]", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { sendContactFormRequest, loading };
}
