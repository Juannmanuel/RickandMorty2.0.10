import { useSelector } from "react-redux"


export default function Season () {
    const episodes = useSelector((state) => state.episodesBySeason)
    const generateSeason = () => {
      return episodes? episodes?.map((el) => {
            return <div>
                <h2>{`Capitulo ${el.episode.slice(5)} "${el.name}"  ${el.air_date}`}</h2>
                <div>
                    {el.Characters.slice(0,10).map((el) => {
                        <img src={el.image} alt={el.name} />
                    })}
                </div>
            </div>
        })
   : <h2>Seleccione una Temprada para concer todos sus personajes!</h2> }
    return (
        <div>
            {generateSeason()}
        </div>
    )

}