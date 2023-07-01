import React from 'react';
import './index.css';

function MyForm() {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nome:</label>
          <input type="text" id="name" className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">E-mail:</label>
          <input type="email" id="email" className="form-control" />
        </div>

        <button type="submit" className="form-button">Enviar</button>
      </form>
    </div>
  );
}

export default MyForm;