import React, { useState } from 'react';
import './eldoret.css';
import { Annex, Action, Chinese, EldoretTown, Elgon, Jerusalem, Juction, Kapseret, Kapsoya, 
    Kimumu, Kiplomble, Marura, Outspan, Peris, Pioneer, Sogomo, West } from '../../places';

const Eldoret = ({ onBack }) => {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const placeComponents = {
        Action,
        Annex,
        Chinese,
        Eldoret: EldoretTown,
        'Elgon View': Elgon,
        Jerusalem,
        Junction: Juction,
        Kapseret,
        Kapsoya,
        Kimumu,
        Kiplombe: Kiplomble,
        Marura,
        Outspan,
        Peris,
        Pioneer,
        'Sogomo-Mti-Moja': Sogomo,
        'West Indies': West,
    };

    const handlePlaceClick = (place) => {
        setIsLoading(true);
        setSelectedPlace(place);

        // Simulate loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div>
            <div className="locations-container">
                <button onClick={onBack} className="back-button">
                    <span className="arrow">←</span>
                </button>
                {!selectedPlace ? (
                    Object.keys(placeComponents).map((place) => (
                        <div
                            key={place}
                            className="location-box"
                            onClick={() => handlePlaceClick(place)}
                        >
                            {place}
                        </div>
                    ))
                ) : (
                    <div className="map-section">
                        {isLoading ? (
                            <div className="loader">
                                <div className="key-spinner">
                                    <div className="key">🔑</div>
                                    <div className="key">🔑</div>
                                    <div className="key">🔑</div>
                                </div>
                                <p>Loading map...</p>
                            </div>
                        ) : (
                            React.createElement(placeComponents[selectedPlace])
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Eldoret;
