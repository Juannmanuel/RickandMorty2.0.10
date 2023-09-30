import axios from "axios"
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"
export const GET_CHARACTER_BY_ID = "GET_CHARACTER_BY_ID"
export const GET_EPISODES_BY_SEASON = "GET_EPISODES_BY_SEASON"

export const getAllCharacters = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios("http://localhost:3001/characters/")
            return dispatch({type: GET_ALL_CHARACTERS, payload: data})
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const getCharacterById = (id) => {
    return  async ( dispatch ) => {
        try {
            const { data } = await axios(`http://localhost:3001/characters/${id}`)
            dispatch({type: GET_CHARACTER_BY_ID, payload: data})
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const getEpisodesBySeason = (season) => {
    console.log(season);
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/episodes/season/${season}`)
            dispatch({type: GET_EPISODES_BY_SEASON, payload: data})
        } catch (error) {
            console.log(error.message);
        }
    }
}
