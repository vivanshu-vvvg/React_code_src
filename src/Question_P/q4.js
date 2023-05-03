//Create five cards which includes four inputs and pass the data in these cards through props. e.g., card must have one image, one logo and two headers. If anyone click on the card then it must lead the user to next page.

import React from 'react';
import './q4.css'
import Card from './q4_cards';

const CardList = () => {
    const cardsData = [
      {
        id: 1,
        imageUrl: 'https://via.placeholder.com/300x200',
        logoUrl: 'https://via.placeholder.com/50x50',
        title: 'Card 1',
        subtitle: 'This is the first card',
      },
      {
        id: 2,
        imageUrl: 'https://via.placeholder.com/300x200',
        logoUrl: 'https://via.placeholder.com/50x50',
        title: 'Card 2',
        subtitle: 'This is the second card',
      },
      {
        id: 3,
        imageUrl: 'https://via.placeholder.com/300x200',
        logoUrl: 'https://via.placeholder.com/50x50',
        title: 'Card 3',
        subtitle: 'This is the third card',
      },
      {
        id: 4,
        imageUrl: 'https://via.placeholder.com/300x200',
        logoUrl: 'https://via.placeholder.com/50x50',
        title: 'Card 4',
        subtitle: 'This is the fourth card',
      },
      {
        id: 5,
        imageUrl: 'https://via.placeholder.com/300x200',
        logoUrl: 'https://via.placeholder.com/50x50',
        title: 'Card 5',
        subtitle: 'This is the fifth card',
      },
    ];
  
    const handleCardClick = (id) => {
      // Navigate to the next page when a card is clicked
      console.log(`Clicked card with ID ${id}`);
    };
  
    return (
      <div className="card-list">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} onClick={() => handleCardClick(card.id)} />
        ))}
      </div>
    );
  };
  
  export default CardList;