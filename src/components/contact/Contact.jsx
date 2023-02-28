import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4> Email</h4>

            <a href="mailto:marco.luigi.nocentini@gmail" target="blank">
              {" "}
              <h5>marco.luigi.nocentini@gmail.com</h5>
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/noce86" target="_blank" rel="noreferrer">
              <h5>https://m.me/noce86</h5>
            </a>
          </article>
          <article className="contact__option">
            <CiLinkedin className="contact__option-icon" /> <h4> Linkedin</h4>
            <a
              href="https://www.linkedin.com/in/noce86/"
              target="_blank"
              rel="noreferrer"
            >
              <h5>www.linkedin.com/in/noce86/</h5>
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4> WhatsApp</h4>
            <a
              href="https://wa.me/393711522792"
              target="_blank"
              rel="noreferrer"
            >
              <h5>+393711522792</h5>
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
