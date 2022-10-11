import "../App.css";

import {Link} from "react-router-dom";
import {useState,useEffect} from "react";

import Gamepage from "./Gamepage";

function Homepage(){

    const[player1,setPlayer1] = useState('');
    const[player2,setPlayer2] = useState('');

    const fetchPlayer1Name = (e)=>{
        let name = e.target.value;
        setPlayer1(name);
    }

    const fetchPlayer2Name = (e)=>{
        let name = e.target.value;
        setPlayer2(name);
    }

    const handleStartGame = () =>{
        if(!localStorage.getItem('playerNames')){
            localStorage.setItem('playerNames', JSON.stringify({}));
        }

        let players = {
            player1Name: player1,
            player2Name: player2
        }

        localStorage.setItem('playerNames', JSON.stringify(players));        
    }
    
    return(
        <div className="homepage">
            <div className="innerHomepage">
                <input type="text" placeholder="Enter player1" onChange={fetchPlayer1Name} />
                <input type="text" placeholder="Enter player2" onChange={fetchPlayer2Name} />
                <button onClick={handleStartGame}><Link to="gamepage">Start Game</Link></button>
            </div>   
        </div>
    );
}

export default Homepage;