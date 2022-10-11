import "../App.css";

import {useState,useEffect} from "react";

import Board from "./Board";

function Gamepage(){

    const[playerNames,setPlayerNames] = useState({});
    const[startGame,setStartGame] = useState(false);
    const[count,setCount] = useState(parseInt(3));

    useEffect(()=>{
        if(localStorage.getItem("playerNames")){
            setPlayerNames(JSON.parse(localStorage.getItem("playerNames")));
        }
        setTimeout(()=>{
            setCount(count-1);
        },1000);
    },[count>=2 ? count: null])

    console.log(playerNames);

    return(
        <div className="gamepage">   
            <div className="innerGamePage">
                <h1>Welcome to TicTacToe</h1>
                <h2>{playerNames.player1Name+ " v/s " + playerNames.player2Name}</h2>
                {!startGame?<div className="initialGameState">Game starts in {count==0?setStartGame(true):count}</div>:<Board playerNames={playerNames}/>}
            </div>
        </div>
    );
}

export default Gamepage;