import axios from "axios";

export const addDestinations = (planetName) => ({
    type: 'ADD_SELECTED_PLANET',
    payload: planetName,
});

export const removeDestinations = (planetName) => ({
    type: 'REMOVE_SELECTED_PLANET',
    payload: planetName,
});

export const setLaunchVehicle = (planetName, vehicleName) => ({
    type: 'SET_LAUNCH_VEHICLE',
    payload: { planetName, vehicleName },
});

export const resetDestinations = () => ({
    type: 'RESET',
})