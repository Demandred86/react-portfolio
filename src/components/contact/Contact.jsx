import React, { useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import emailJs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialState);

  const [statusMessage, setStatusMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    console.log(formState);
  };
  const clearState = () => setFormState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_nyb278v",
        "template_62vlcfa",
        e.target,
        "4__Ge8ZVeDcuokKKC"
      )
      .then(
        (result) => {
          clearState();
          setStatusMessage("Email sent successfully");
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
          setStatusMessage(`${error.text} happened`);
        }
      );
  };

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
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={formState.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formState.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            value={formState.message}
            onChange={handleChange}
          ></textarea>
          {isSent ? (
            <p>{statusMessage}</p>
          ) : (
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
