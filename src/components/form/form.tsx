import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css';

function MyForm() {
  return (
    <div className="form-container">
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default MyForm;