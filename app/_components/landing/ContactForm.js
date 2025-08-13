import Button from "../reusable/Button";

function ContactForm() {
  return (
    <form className="flex flex-col gap-30 lg:gap-60">
      <div className="contact-form-spacing">
        <label htmlFor="name" className="contact-form-heading">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          className="contact-form-input"
          required
        />
      </div>

      <div className="contact-form-spacing">
        <label htmlFor="email" className="contact-form-heading">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="contact-form-input"
          required
        />
      </div>

      <div className="contact-form-spacing">
        <label htmlFor="phone" className="contact-form-heading">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          autoComplete="tel"
          className="contact-form-input"
        />
      </div>

      <div className="contact-form-spacing">
        <label htmlFor="message" className="contact-form-heading">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-form-input"
          required
        ></textarea>
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  );
}

export default ContactForm;
