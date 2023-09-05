// reducers.js
const initialState = {
    destinations: [],
    launchVehicles: {},
};

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SELECTED_PLANET':
            return {
                ...state,
                destinations: [...state.destinations, action.payload],
            };
        case 'REMOVE_SELECTED_PLANET': {
            const updatedLaunchVehicles = { ...state.launchVehicles };
            delete updatedLaunchVehicles[action.payload]; // Remove corresponding launch vehicle
            return {
                ...state,
                destinations: state.destinations.filter(name => name !== action.payload),
                launchVehicles: updatedLaunchVehicles,
            };
        }
        case 'SET_LAUNCH_VEHICLE':
            return {
                ...state,
                launchVehicles: {
                    ...state.launchVehicles,
                    [action.payload.planetName]: action.payload.vehicleName,
                },
            };
        case 'RESET': 
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export default destinationReducer;
