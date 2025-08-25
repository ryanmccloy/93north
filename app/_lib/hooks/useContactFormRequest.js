"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function useContactFormRequest() {
  const [loading, setLoading] = useState(false);

  const sendContactFormRequest = async (data) => {
    setLoading(true);

    try {
      await toast.promise(
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }).then((res) => res.json()),
        {
          loading: "Sending message...",
          success: "Message sent successfully! We will be in touch soon.",
          error:
            "Failed to send message. Please try again or contact us at contact@93northstudio.com",
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
