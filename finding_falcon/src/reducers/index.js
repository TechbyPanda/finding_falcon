import { combineReducers } from 'redux';
import vehicleReducer from './vehicleReducer';
import planetReducer from './planetReducer';
import destinationReducer from './destinationReducer';
import findingFalconReducer from './findingFalconReducer';

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  planets: planetReducer,
  destinations: destinationReducer,
  findFalcon: findingFalconReducer
});

export default rootReducer;
