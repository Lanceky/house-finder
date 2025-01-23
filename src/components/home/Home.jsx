import React from 'react';
import './home.css';
import keys from '../../assets/keys.jpg'


const Home = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const county = document.getElementById('countySelect').value;

        if (county === "uasin_gishu") {
            window.location.href = "/uasingishu"; 
        } else {
            alert("Currently, only Uasin Gishu is available. Please select 'Uasin Gishu'.");
        }
    };

    return (
        <div className="main-container">
            {/* Left Side: House Image */}
            <div className="left-side">
                <img src={keys} alt="keys" />
            </div>

            {/* Right Side: Search Form */}
            <div className="right-side">
                <h2>Find Your Dream Home</h2>
                <form id="searchForm" onSubmit={handleFormSubmit}>
                    <select id="countySelect" name="county">
                        <option value="">Select County</option>
                        <option value="uasin_gishu">Uasin Gishu</option>
                        <option value="nairobi">Nairobi</option>
                        <option value="mombasa">Mombasa</option>
                        <option value="kisumu">Kisumu</option>
                        {/* all Kenyan counties to be added in future*/}
                    </select>
                    <br />
                    <button type="submit">Explore</button>
                </form>
            </div>
        </div>
    );
};

export default Home;
