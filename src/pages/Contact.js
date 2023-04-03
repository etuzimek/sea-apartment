import React from "react";
import "../components/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact">Kontakt</h1>
      <form className="contact-form" method="POST">
        <div className="contact-details">
          <input type="text" name="name" placeholder="Imie" required />
          <input type="text" name="email" placeholder="Email" required />
        </div>
        <div className="contact-subject">
          <input type="text" name="subject" placeholder="Temat" />
        </div>
        <div>
          <textarea
            rows="5"
            cols="50"
            name="message"
            placeholder="Wiadomosc"
            required
          />
        </div>
        <div>
          <ul className="contact-confirm">
            <li>
              <input type="submit" value="Send Message" />
            </li>
            <li>
              <input type="reset" value="Clear Form" class="alt" />
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Contact;
