import "../App.css";

import {useState,useEffect} from "react";

function SquareComponent(props)
{
    return(
        <button className="square" onClick={(e)=>props.tileClick(props.id)}>{props.boardVal}</button>
    );
}

export default SquareComponent;