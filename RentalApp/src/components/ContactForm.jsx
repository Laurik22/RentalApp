import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
      email: '',
      phoneNum: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.send('contact_service', 'contact_form', formData,"G6CFdDek63uPWvroU")
        .then(() => {
          alert('Varaus lähetetty onnistuneesti!');
        }, (error) => {
          alert('Virhe varauksen lähettämisessä:', error);
        });
    };
  
    return (
        <form onSubmit={handleSubmit}>
        <h2>Ota yhteyttä </h2>

        <br />
        <label>nimi:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Sähköposti:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Puhelinnumero:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <label>Aihe:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <br />
        <label>Viesti:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        
        <button type="submit">Lähetä</button>
      </form>
    );
  }
  
  export default ContactForm;