import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCharacters } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./cards.module.css"

const Cards = () => {
  const allCharacters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);
  console.log(allCharacters);
  return (
    <div className={style.card}>
      {allCharacters.map((el) => (
        <Card
          key={el.id}
          id={el.id}
          name={el.name}
          status={el.status}
          species={el.species}
          gender={el.gender}
          origin={el.origin}
          image={el.image}
        />
      ))}
    </div>
  );
};
export default Cards;
