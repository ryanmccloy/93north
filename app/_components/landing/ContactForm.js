"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/app/_lib/schemas/contactFormSchema";
import useContactFormRequest from "@/app/_lib/hooks/useContactFormRequest";
import Button from "../reusable/Button";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const { sendContactFormRequest, loading } = useContactFormRequest();

  const onSubmit = async (data) => {
    await sendContactFormRequest(data);
    reset();
  };

  return (
    <form
      className="flex flex-col gap-30 lg:gap-60"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="contact-form-spacing">
        <label htmlFor="name" className="contact-form-heading">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          className="contact-form-input"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="contact-form-spacing">
        <label htmlFor="email" className="contact-form-heading">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="contact-form-input"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div className="contact-form-spacing">
        <label htmlFor="phone" className="contact-form-heading">
          Phone
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="contact-form-input"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="contact-form-spacing">
        <label htmlFor="message" className="contact-form-heading">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          name="message"
          className="contact-form-input"
        ></textarea>
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="text-center lg:text-start">
        <Button type="submit" isActive={!loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
