import { useEffect } from "react";
import style from "./Detail.module.css"
import { useSelector, useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { getCharacterById } from "../../redux/actions";


const Detail = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
    dispatch(getCharacterById(id))
    },[])
    
    const character = useSelector((state) => state.detail)
    console.log(character);
    const generateDetailEpisode = () => {
       console.log("asdasdasd",character.Episodes); 
       return character?.Episodes?.map((ele) => <option value={ele.name}>Episode Name:{ele.name} year:{ele.air_date} season: {ele.episode} </option>)
    }
    return(
        <div>
            <div>
                <img src={character.image} alt={character.name}/>
                <h1>{character.name}</h1>
            </div>
            <div>
                <div>
                    <select>{generateDetailEpisode()}</select>
                </div>
                <h2></h2>
                <h2></h2>
                <h2></h2>
            </div>
        </div>
    )
}

export default Detail