import axios from 'axios'
import { SEARCH_MOVIE, SEARCH_ERROR } from '../types';

// Movies action
export const getMovies = () => async dispatch => {
  console.log('first')
    try {
        const res = await axios.get(`https://imdb-api.tprojects.workers.dev/search?query=captian marvel`);
        console.log('res', res)
        dispatch({
            type: SEARCH_MOVIE,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: SEARCH_ERROR,
            payload: err
        })
    }
}