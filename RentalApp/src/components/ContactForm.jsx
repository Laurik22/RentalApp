import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {Col, Button, Row, Container, Form } from 'react-bootstrap'

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
      <Container>
      <Row className="justify-content-center align-items-center"  >
        <Col>
          <Form onSubmit={handleSubmit} className="p-4 border bg-white" style={{maxWidth: '500px'}}>
            <h2 className="mb-4">Ota yhteyttä</h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nimi *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Sähköposti *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md={6} controlId="formPhone" className='mb-3'>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Puhelinnumero"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="formSubject">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Aihe *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Viesti *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Row>

            <div className="d-grid">
              <Button type="submit" variant='secondary'size='lg' >
                Lähetä
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      </Container>
    );
  }
  
  export default ContactForm;