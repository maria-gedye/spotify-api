// here are our actions
import {
  SET_SONGS,
  ADD_SONGS,

} from '../utils/constants';
import { get } from '../utils/api';
export const setSONGS = (SONGS) => ({
  type: SET_SONGS,
  SONGS
});
export const addSONGS = (SONGS) => ({
  type: ADD_SONGS,
  SONGS
});

export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(searchTerm
      )}&type=songs`;
 // Add spotify api url here
      const result = await get(API_URL);
      console.log(result);
      const { SONGS } = result;
      return dispatch(setSONGS(SONGS));
    } catch (error) {
      console.log('error', error);
    }
  };
};