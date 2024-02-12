import { useState } from "react";
import { LocationContext } from "../context";

/* eslint-disable react/prop-types */
const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: "",
        longitude: "",
    });

    return (
        <LocationContext.Provider
            value={{ selectedLocation, setSelectedLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export default LocationProvider;
