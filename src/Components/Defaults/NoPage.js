import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NoPage.css";
import "./../Styles/default.css";

const NoPage = () => {
  /*
    Ez az oldal ami megjelenik ha valaki vagy rosszindutból
    vagy véletlenl más útvonalat írna be a böngészőbe mint
    ami megengedett.
  */
  return (
    <div>
        <h1 id="404h1">404 Oldal nem található!</h1>
        <hr />
        <Link to="/"><p id="404p">Lépj vissza a főoldalra!</p></Link>
    </div>
  )
}

export default NoPage