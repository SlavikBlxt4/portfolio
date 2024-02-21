import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xeqygkwy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // La solicitud fue exitosa
        console.log('Formulario enviado correctamente');
        // Puedes realizar acciones adicionales después de enviar el formulario
        // Por ejemplo, mostrar un mensaje de éxito, redireccionar al usuario, etc.
      } else {
        // La solicitud falló
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className="container">
      <div className="text">Get In Touch With Me</div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <div className="underline"></div>
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-data">
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            <div className="underline"></div>
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
            <div className="underline"></div>
            <label htmlFor="emailAddress">Email Address</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" name="message" value={formData.message} onChange={handleChange} required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="message">Write your message</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data-button">
            <div className="inner"></div>
            <input type="submit" className="send-button" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );
}

  


const Contact = () => {
    return (
        <div className='content-contact'>
            <div className='contact-title-class'>
                <h1>Contact Me</h1>
                <p>For Any Project Knock Me</p>
                <div style={{ height: '0.2px', backgroundColor: 'white', margin: '20px 0' }}></div>
            </div>
            <div className='form-class'>
                <ContactForm />
            </div>
        </div>
    );
};
export default Contact;