import React from 'react';
import 'assets/card.css';

const Card = ({ children, title, subtitle }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
