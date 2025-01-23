import React, { useState } from 'react';
import './home.css';
import keys from '../../assets/keys.jpg';
import Eldoret from '../Eldoret/Eldoret';

const Home = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const county = document.getElementById('countySelect').value;
        
        if (county === "Eldoret") {
            setSelectedLocation('Eldoret');
        } else {
            alert("Currently, only Eldoret is available. Please select 'Eldoret'.");
        }
    };

    // If Eldoret is selected, render Eldoret component
    if (selectedLocation === 'Eldoret') {
        return <Eldoret />;
    }

    return (
        <div className="main-container">
            <div className="left-side">
                <img src={keys} alt="keys" />
            </div>
            <div className="right-side">
                <h2>Find Your Dream Home</h2>
                <form id="searchForm" onSubmit={handleFormSubmit}>
                    <select id="countySelect" name="county">
                        <option value="">Select Location</option>
                        <option value="Eldoret">Eldoret</option>
                        <option value="nairobi">Nairobi</option>
                        <option value="mombasa">Mombasa</option>
                        <option value="kisumu">Kisumu</option>
                    </select>
                    <br />
                    <button type="submit">Explore</button>
                </form>
            </div>
        </div>
    );
};

export default Home;