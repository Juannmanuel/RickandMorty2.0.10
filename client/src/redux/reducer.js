import { GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID, GET_EPISODES_BY_SEASON } from "./actions";

const initialState = {
  characters: [],
  episodes: [],
  detail: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case GET_CHARACTER_BY_ID:
      return {
        ...state,
        detail: action.payload
      }  
    case GET_EPISODES_BY_SEASON:
      return {
        ...state,
        episodes: action.payload
      }   
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
