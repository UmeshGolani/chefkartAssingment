import React from 'react';
import './DishCard.css';

const DishCard = ({ dish }) => {
    return (
        <div className="dish-card">
            <img src={dish.image} alt={dish.name} />
            <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>Rating: {dish.rating}</p>
                <p>{dish.ingredients}</p>
                <button>Add</button>
            </div>
        </div>
    );
};

export default DishCard;
