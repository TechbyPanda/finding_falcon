import axios from "axios";
import { END_POINT, FIND_FALCON_PATH, TOKEN_PATH } from "../constants";

export const findFalconAction = (planet_names, vehicle_names) => async dispatch => {
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    dispatch({ type: 'FETCH_FIND_FALCON_REQUEST'});
    try{
        const token = await axios.post(END_POINT+TOKEN_PATH, null, {headers});

        const data = {
            token: token.data.token,
            planet_names: planet_names,
            vehicle_names: vehicle_names
        }

        const response = await axios.post(END_POINT+FIND_FALCON_PATH, data, {headers});
        dispatch({ type: 'FETCH_FIND_FALCON_SUCCESS', payload: response.data })
    }catch(error){
        dispatch({ type: 'FETCH_FIND_FALCON_FAILURE', payload: error.message })
    }
}

export const resetFindFalconAction = () => ({
    type: 'RESET_FIND_FALCON'
})