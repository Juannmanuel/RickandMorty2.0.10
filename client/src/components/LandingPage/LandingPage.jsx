import image1 from "../../images/rickandmortyLanding3.jpg"
import image2 from "../../images/rickandmortyLanding1.jpg"
import image3 from "../../images/rickandmortyLanding5.jpg"
import image4 from "../../images/rickandmortyLanding7.jpg"
import image5 from "../../images/rickandmortyLanding8.jpg"

import { getEpisodesBySeason } from "../../redux/actions"
import "./LandingPage.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function Landing (){
const navigate = useNavigate()
const dispatch = useDispatch()

const handleSeason = (string) => {
 dispatch(getEpisodesBySeason(string))
 
 
}
return (
    
    <section>
        <img onClick={()=>{handleSeason("s01");}} src={image1} alt="RickAndMorty" />
        <img onClick={()=>{handleSeason("s02");}} src={image2} alt="RickAndMorty" />
        <img onClick={()=>{handleSeason("s03");}} src={image3} alt="RickAndMorty" />
        <img onClick={()=>{handleSeason("s04");}} src={image4} alt="RickAndMorty" />
        <img onClick={()=>{handleSeason("s05");}} src={image5} alt="RickAndMorty" />
    </section>

        
    
)
}