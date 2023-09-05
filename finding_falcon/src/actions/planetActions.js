import axios from 'axios';
import { END_POINT, PLANET_PATH } from '../constants';

export const fetchPlanets = () => async dispatch => {
  dispatch({ type: 'FETCH_PLANETS_REQUEST' });
  try {
    const response = await axios.get(END_POINT+PLANET_PATH);
    dispatch({ type: 'FETCH_PLANETS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PLANETS_FAILURE', payload: error.message });
  }
};