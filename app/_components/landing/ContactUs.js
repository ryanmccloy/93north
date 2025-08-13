import ScrollingBanner from "../reusable/ScrollingBanner";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="section-styles ">
      <div className="width-size mb-90 md:mb-120">
        <h2 className="section-heading">Get in touch</h2>

        <div className="  grid-standard">
          <p className="strong-paragraph border-l-2 h-fit border-l-accent pl-15 md:pl-30">
            Have a project in mind? We’d love to hear from you. Whether you’re
            starting fresh or looking to grow your online presence, tell us
            about your goals below and we’ll be in touch with ideas and a clear
            path forward.
          </p>

          <ContactForm />
        </div>
      </div>

      <ScrollingBanner />
    </div>
  );
}

export default ContactUs;
