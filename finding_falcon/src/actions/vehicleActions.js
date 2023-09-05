import axios from 'axios';
import { END_POINT, VEHICLE_PATH } from '../constants';

export const fetchVehicles = () => async dispatch => {
  dispatch({ type: 'FETCH_VEHICLES_REQUEST' });
  try {
    const response = await axios.get(END_POINT+VEHICLE_PATH);
    dispatch({ type: 'FETCH_VEHICLES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_VEHICLES_FAILURE', payload: error.message });
  }
};