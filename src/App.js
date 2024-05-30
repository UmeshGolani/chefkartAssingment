import React from 'react';
import Header from './Components/Header';
import PopularDishes from './Components/PopularDishes';
import Recommended from './Components/Recommended';
import Footer from './Components/Footer';
import './App.css';
import Recipe from './Components/Recipe/Recipe';

const App = () => {
    return (
        <div className="App">
            {/* <Header />
            <PopularDishes />
            <Recommended />
            <Footer /> */}
            <Recipe/>
        </div>
    );
};

export default App;
