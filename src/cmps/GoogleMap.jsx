import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{ fontSize: '2em' }}>{text}</div>;

export function GoogleMap() {
    const [center, setCenter] = useState({ lat: 32.109333, lng: 34.855499 })
    const zoom = 11

    function onMapClicked({ lat, lng }) {
        console.log('click!', lat, lng)
        setCenter({ lat, lng })
    }

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA5YAKbctMWmj2etXv-KY7MSXDMGaWr0qs" }}
                center={center}
                defaultZoom={zoom}
                onClick={onMapClicked}
            >
                <AnyReactComponent
                    {...center}
                    text="🚩"
                />
                <AnyReactComponent
                    lat={32.109333}
                    lng={34.855499}
                    text="🚩"
                />
                <AnyReactComponent
                    lat={31.954550647783392}
                    lng={34.78756196615489}
                    text="🚩"
                />
                <AnyReactComponent
                    lat={31.87025394962822}
                    lng={34.73469026205333}
                    text="🚩"
                />
            </GoogleMapReact>
        </div>
    );
}