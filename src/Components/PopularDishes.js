import React from 'react';
import './PopularDishes.css';

const PopularDishes = () => {
    const dishes = ["Biryani", "Biryani", "Biryani", "Biryani", "Biryani"];
    return (
        <div className="popular-dishes">
            <h2>Popular Dishes</h2>
            <div className="dishes-list">
                {dishes.map((dish, index) => (
                    <div key={index} className="dish-item">
                        {dish}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularDishes;
