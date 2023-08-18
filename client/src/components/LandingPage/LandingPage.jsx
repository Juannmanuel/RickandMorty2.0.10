import React from 'react';
import style from './landing.module.css'
import { useDispatch, useSelector } from "react-redux";
import {getEpisodesBySeason} from "../../redux/actions"

const LandingPage = () => {
  const dispatch = useDispatch()
  const handleEpisode = (event) => {
    dispatch(getEpisodesBySeason(event.target.name))
  }
const episode = useSelector((state) => state.episodes)
console.log("landing==>", episode);

  return (
    <div>
      <section>
        <img name='S01' onClick={handleEpisode} src="https://i.pinimg.com/564x/e8/06/82/e806821115ebcc776d6d35178808c9c3.jpg" alt="" />
        <img name='S02' onClick={handleEpisode} src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/3276204.jpg" alt="" />
        <img name='S03' onClick={handleEpisode} src="https://i.pinimg.com/564x/ea/15/99/ea1599866e59aeb1926178ebb4a819ed.jpg" alt="" />
        <img name='S04' onClick={handleEpisode} src="https://e1.pxfuel.com/desktop-wallpaper/698/972/desktop-wallpaper-rick-and-morty-tv-series-cartoon-digital-art-rick-and-morty-iphone.jpg" alt="" />
        <img name='S05' onClick={handleEpisode} src="https://i.pinimg.com/564x/fd/1c/46/fd1c464dfa4ff6792f9a55453a563cf5.jpg" alt="" />
      </section>
    </div>
  )
}
export default LandingPage