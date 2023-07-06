import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function alert(){
    return(
    <>
           <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Por que React-Bootstrap?</Accordion.Header>
        <Accordion.Body>
        React-Bootstrap é uma reimplementação completa dos componentes Bootstrap usando React. Ele  não depende de nenhum dos dois  bootstrap.js ou jQuery. Se você tiver o React setup e o React-Bootstrap instalado, terá tudo o que precisa.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>React-Bootstrap ao React DOM</Accordion.Header>
        <Accordion.Body>
        Métodos e eventos usando jQuery são feitos imperativamente pela manipulação direta do DOM. Em contraste, o React usa atualizações no estado para atualizar o DOM virtual. Dessa forma, o React-Bootstrap fornece uma solução mais confiável ao incorporar a funcionalidade do Bootstrap ao DOM virtual do React. Abaixo estão alguns exemplos de como os componentes do React-Bootstrap diferem do Bootstrap.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
    );


}

export default alert;