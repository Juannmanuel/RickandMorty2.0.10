import { useDispatch, useSelector } from "react-redux";
import imageBienvenida from "../../images/RickAndMortyPortal.jpg";
import Landing from "../LandingPage/LandingPage";
import style from "./Home.module.css";
import Season from "../Episodes/Episodes";
import { useEffect } from "react";
import { getAllCharacters, getEpisodesBySeason } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, []);
  const generateEpisodes = () => {
    return episodes.map((el) => {
      return <div className={style.containerEpisodes}>
        <div className={style.titleEpisodes}>
          <p>{`Season ${el.episode.slice(1,3)} episode ${el.episode.slice(5)} ${el.name}; ${el.air_date}`}</p>
        </div>
        <div className={style.conteinerImages}>
          <section className={style.sectionCards}>
          {el.Characters.slice(0,10).map((el) => {
            return <img src={el.image} alt={el.name}></img>
          })}
          </section>

        </div>
      </div>
    })
  }
  const episodes = useSelector((state) => state.episodesBySeason);
  console.log(episodes);
  return (
    <div className={style.containerHome}>
      <div className={style.welcome}>
        <div className={style.titleHome}>
          <h1>
            <div className={style.titleWelcome}>Welcome</div>
            <div className={style.titleWelcomeDescription}>
              Where Science Meets Madness
            </div>
          </h1>
        </div>
        <div className={style.imageTitle}></div>
      </div>

      <div className={style.descriptionHome}>
        <p>
          Dive into each season and uncover a multitude of episodes brimming
          with mad science, interdimensional adventures, and humor that defies
          the bounds of logic. But that's not all; here, you'll also have the
          opportunity to get acquainted with all the unforgettable characters
          who breathe life into this unique universe. From the irreverent Rick
          to the innocent Morty, each one has their own story to tell
        </p>
      </div>
      <div className={style.landing}>
        <Landing/>
      </div>
      <div>
        {episodes && generateEpisodes()}
      </div>
    </div>
  );
}
