import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3786ir",
        "template_u1rfdve",
        form.current,
        "2QMm44-e4ryaA1IZC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); 
    alert("message sent successful");
  };

  return (
    <div className="main" id="contact">
        <h1>CONTACT</h1>
    <form ref={form} onSubmit={sendEmail}>
      <div className="control">
        {" "}
        <label>Name</label>
        <input type="text" name="user_name" required /></div>
        <div className="control">
          {" "}
          <label>Email</label>
          <input type="email" name="user_email" className="email" required />
        </div>
        <div className="control">
        <label>Message</label>
        <textarea rows={4} name="message" required /></div>
        <br />
        

        <div className=" btn"> <input  type="submit" value="Send" className="button"/> </div>
        
      
    </form>
    </div>
  );
};

export default ContactUs;
