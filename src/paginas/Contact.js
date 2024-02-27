import React from 'react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";




function ContactForm() {
  const { t, i18n } = useTranslation("global");
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
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
        setIsSubmitted(true);
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
    <div className="text">{t('contact.title')}</div>
    {isSubmitted ? (
        <div className='enviado'>{t("contact.form.sent-message")}</div>
      ) : (
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <div className="underline"></div>
            <label htmlFor="firstName">{t('contact.form.name')}</label>
          </div>
          <div className="input-data">
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            <div className="underline"></div>
            <label htmlFor="lastName">{t('contact.form.lastname')}</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
            <div className="underline"></div>
            <label htmlFor="emailAddress">{t('contact.form.email')}</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" name="message" value={formData.message} onChange={handleChange} required></textarea>
            <br />
            <div className="underline"></div>
          <label htmlFor="message">{t('contact.form.message')}</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data-button">
            <div className="inner"></div>
            <input type="submit" className="send-button" value={t('contact.form.send')} />
          </div>
        </div>
      </form>
    )}
    </div>
  );
}

  


const Contact = () => {
  const { t, i18n } = useTranslation("global");
    return (
        <div className='content-contact'>
            <div className='contact-title-class'>
              <h1>{t('contact.contactme')}</h1>
              <p>{t('contact.submessage')}</p>
                <div style={{ height: '0.2px', backgroundColor: 'white', margin: '20px 0' }}></div>
            </div>
            <div className='form-class'>
                <ContactForm />
            </div>
        </div>
    );
};
export default Contact;