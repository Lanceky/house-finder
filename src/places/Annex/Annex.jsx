import React from "react";
import "./Annex.css";

const Place = () => {
  return (
    <div className="place-container">
      <div className="place-info-wrapper">
        <div className="place-info">
          <h2>Annex Location</h2>
          <div className="place-details">
            <p>
              <span className="icon">📅</span> 17 November - 22 November <br />
              8:00 am - 10:00 pm
            </p>
            <p>
              <span className="icon">📍</span> Annex, Eldoret, Kenya
            </p>
            <p>
              <span className="icon">🏠</span> Housing Units Available: 120
            </p>
            <p>
              <span className="icon">💰</span> Average Rent Charges: $300 - $500 per month
            </p>
            <p>
              <span className="icon">🔒</span> Security: 24/7 Surveillance and Gated Community
            </p>
            <p>
              <span className="icon">💧</span> Water Supply: Reliable
            </p>
            <p>
              <span className="icon">🎯</span> Recreational Activities: Nearby parks, gyms, and shopping centers
            </p>
          </div>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Annex%20Eldoret+(Annex%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Annex Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Place;
