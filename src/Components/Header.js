import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="date-picker">
                    <input type="date" value="2021-05-21" />
                </div>
                <div className="time-picker">
                    <input type="time" value="22:30" /> - <input type="time" value="00:30" />
                </div>
            </div>
            <div className="cuisine-selector">
                <button className="active">Italian</button>
                <button>Indian</button>
                <button>Indian</button>
                <button>Indian</button>
            </div>
        </div>
    );
};

export default Header;
