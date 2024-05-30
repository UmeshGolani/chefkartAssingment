import React from 'react';
import Ingredients from './Ingredients';
import Appliances from './Appliances';

const Recipe = () => {
  return (
    <div className="recipe">
      <div className="header">
        <h1>Mashala Muglai</h1>
        <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
        <div className="time">
          <span>⏰</span> 1 hour
        </div>
      </div>
      <Ingredients />
      <Appliances />
    </div>
  );
}

export default Recipe;
