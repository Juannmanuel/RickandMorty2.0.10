import { GET_ALL_CHARACTERS, GET_CHARACTER_BY_ID, GET_EPISODES_BY_SEASON } from "./actions";

const initialState = {
  episodesBySeason: [],
  charactersBySeason: [],
  characters: [],
  episodes: [],
  detail: {},

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
//       Lo que tengo que hacer acá es sacar todos los personajes que hay es una temporada, y sacar todos los que esten repetidos y tambien sacar los datos 
// de los episodios y dejarlo en otro lugar
    case GET_EPISODES_BY_SEASON:
      return {
      ...state,
      episodesBySeason: action.payload
    }     
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
