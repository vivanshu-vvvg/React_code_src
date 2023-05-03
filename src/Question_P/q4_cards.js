import React from 'react';
import './q4.css';

const Card = (props) => {
  const { imageUrl, logoUrl, title, subtitle, onClick } = props;

  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <img src={logoUrl} alt={title} className="logo" />
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Card;
