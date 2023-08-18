import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ name, id, status, species, gender, origin, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const nameLength = () => {
    if (name.length > 15) {
      const nameCut = name.split("").splice(0, 10).join("");
      return <h3 className={style.nameChar}>{nameCut}... </h3>;
    } else {
      return <h3 className={style.nameChar}>{name}</h3>;
    }
  };

  const generateCards = () => {
    return (
      <>
        <p>status: {status}</p>
        <p>species: {species}</p>
        <p>gender: {gender}</p>
        <p>origin: {origin}</p>
      </>
    );
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
      <div className={style.card}>
        <img src={image} alt={name} />
    <div className={style.circle}></div>
    <div className={style.circle}></div>
    <div className={style.card_inner}>
    </div>
</div>
  )
//     <div className={style.containerCard}>
//       <button
//           onClick={handleShowDetails}
//           className={style.button}
//           style={{ background: "none", border: "none", cursor: "pointer" }} 
//         >{nameLength()}
//       <div className={style.front}>
//         <img className={style.image} src={image} alt={name} />
        
//       </div>
//       </button>
//       {showDetails && generateCards()}
//     </div>
//   );
};

export default Card;
