import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './index.css';

function MyCard() {
  return (
    <Card>
      <Card.Img variant="top" src="xbox.jpg" />
      <Card.Body>
        <Card.Title>Xbox novo (confia)</Card.Title>
        <Card.Text>
          Descrição do xbox.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;