import { useState } from 'react'
import Square from './square';

const Board = ({move,state,onPlay}) => {

    const handleClick = (i) => {
        if(state[i] != null) return;
        const newArray = state.slice();
        newArray[i] = move;
        onPlay(newArray)
    }

    const calcW = () =>{
        const moves = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0;i<moves.length;i++){
            if(state[moves[i][0]] == null || state[moves[i][1]] == null || state[moves[i][2]] == null)
                continue;
            if(state[moves[i][0]] === state[moves[i][1]] && state[moves[i][1]] === state[moves[i][2]])
                status = (state[moves[i][0]] == 'X')? "'X' WINS":"'O' WINS";
        }
    }

    let status;
    calcW();

    return (
        <>
            <section className="h-60 mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <div className="flex h-20 border-b-4 border-black">
                        <Square border={`border-r-4`} value={state[0]} onSquareClick={() => handleClick(0)} />
                        <Square border={`border-r-4`} value={state[1]} onSquareClick={() => handleClick(1)} />
                        <Square border={``} value={state[2]} onSquareClick={() => handleClick(2)} />
                    </div>
                    <div className="flex h-20 border-b-4 border-black">
                        <Square border={`border-r-4`} value={state[3]} onSquareClick={() => handleClick(3)} />
                        <Square border={`border-r-4`} value={state[4]} onSquareClick={() => handleClick(4)} />
                        <Square border={``} value={state[5]} onSquareClick={() => handleClick(5)} />
                    </div>
                    <div className="flex h-20">
                        <Square border={`border-r-4`} value={state[6]} onSquareClick={() => handleClick(6)} />
                        <Square border={`border-r-4`} value={state[7]} onSquareClick={() => handleClick(7)} />
                        <Square border={``} value={state[8]} onSquareClick={() => handleClick(8)} />
                    </div>
                </div>
            </section>
            <section className="h-40 text-6xl text-center py-10 font-mono">{status}</section>
        </>
    )
}

export default Board
