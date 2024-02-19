import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xeqygkwy");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="email">
          EMAIL ADRESS
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          SEND
        </button>
      </form>
    );
  }


const Contact = () => {
    return (
        <div className='content-contact'>
            <div className='contact-title-class'>
                <h1>Contact Me</h1>
                <p>For Any Project Knock Me</p>
                <div style={{ height: '1px', backgroundColor: 'white', margin: '20px 0' }}></div>
            </div>
            <div className='form-class'>
                <h2>Get In Touch With Me</h2>
                <ContactForm />
            </div>
        </div>
    );
};
export default Contact;