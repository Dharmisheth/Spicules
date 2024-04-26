import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

const ContactAdmin = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the email to your backend or use a service like SMTP.js to send the email directly
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear the form fields after submission
    setEmail('');
    setMessage('');
  };

  return (
    <Container>
        <Card>
            <CardBody>
      <h2>Request User Registration</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Your Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </FormGroup>
        <Button type="submit" color="primary">Send Request</Button>
      </Form>
      </CardBody>
      </Card>
    </Container>
  );
};

export default ContactAdmin;
