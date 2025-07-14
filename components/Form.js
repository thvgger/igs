import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnnzayqy");
  if (state.succeeded) {
      return <p>Thanks for Joining!</p>;
  }
  return (
      <div className="contact-form">
  <h3>Send Us a Message</h3>
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />
    <label htmlFor="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required />
    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    <button type="submit" className="btn" disabled={state.submitting}> Send Message</button>
  </form>
</div>
  );
}