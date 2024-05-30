import React from 'react';
import DishCard from './DishCard';
import './Recommended.css';

const Recommended = () => {
    const dishes = [
        { name: "Masala Muglai", rating: 4.2, ingredients: "Chicken fried in deep tomato sauce with delicious spices", image: "path/to/image" },
        // Add more dish objects here
    ];
    return (
        <div className="recommended">
            <h2>Recommended</h2>
            {dishes.map((dish, index) => (
                <DishCard key={index} dish={dish} />
            ))}
        </div>
    );
};

export default Recommended;
