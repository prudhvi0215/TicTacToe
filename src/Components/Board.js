import "../App.css";

import {useState,useEffect} from "react";

import SquareComponent from "./Square-component";

import Winner from "./Winner";

function Board(props)
{
    const [boardValues,setBoardValues] = useState(["","","","","","","","",""]);
    const [isXChance,setIsXChance] = useState(true);
    const [ResultDeclared,setResultDeclared] = useState(false);
    const [winner,setWinner] = useState('');

    useEffect(() =>{
        const combinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let x of combinations)
        {
            if(boardValues[x[0]]=='X' && boardValues[x[1]]=='X' && boardValues[x[2]]=='X'){
                setResultDeclared(true);
                setWinner(props.playerNames.player1Name);
                break;
            }else if(boardValues[x[0]]=='O' && boardValues[x[1]]=='O' && boardValues[x[2]]=='O'){
                setResultDeclared(true);
                setWinner(props.playerNames.player2Name);
                break;
            }
        }
    },[boardValues]);

    const handleTileClick = (idx)=>{
        if(isXChance && boardValues[idx]==""){
            let board = [...boardValues];
            board[idx] = 'X';
            setBoardValues(board);
            setIsXChance(false);
        }else if(boardValues[idx]==""){
            let board = [...boardValues];
            board[idx] = 'O';
            setBoardValues(board);
            setIsXChance(true);
        }
    }

    return(
        <>
        {ResultDeclared?<Winner name={winner}/>:
        <div className="Board">
            <div className="boardRow1">
                <SquareComponent id={0} boardVal={boardValues[0]} tileClick={handleTileClick}/>
                <SquareComponent id={1} boardVal={boardValues[1]} tileClick={handleTileClick}/>
                <SquareComponent id={2} boardVal={boardValues[2]} tileClick={handleTileClick}/>
            </div>
            <div className="boardRow2">
                <SquareComponent id={3} boardVal={boardValues[3]} tileClick={handleTileClick}/>
                <SquareComponent id={4} boardVal={boardValues[4]} tileClick={handleTileClick}/>
                <SquareComponent id={5} boardVal={boardValues[5]} tileClick={handleTileClick}/>
            </div>
            <div className="boardRow3">
                <SquareComponent id={6} boardVal={boardValues[6]} tileClick={handleTileClick}/>
                <SquareComponent id={7} boardVal={boardValues[7]} tileClick={handleTileClick}/>
                <SquareComponent id={8} boardVal={boardValues[8]} tileClick={handleTileClick}/>
            </div>
        </div>
        }
        </>
    );
}

export default Board;