import { useEffect, useState } from 'react'
import Board from './components/board';
import png from './assets/undo-svgrepo-com.png'

function App() {
  const [board, setBoard] = useState([Array(9).fill(null)])
  const [move, setMove] = useState('X')
  const [undo, setUndo] = useState(board.length - 1);

  const del = () => {
    setBoard([Array(9).fill(null)])
    setMove('X');
    setUndo(0);
  }

  const posU = () => {
    if(!undo) return;
    setUndo(undo - 1);
    setMove((move == 'X') ? 'O' : 'X')
  }

  const posR = () => {
    if(undo >= board.length-1) return;
    setUndo(undo + 1);
    setMove((move == 'X') ? 'O' : 'X')
  }

  const handlePlay = (li) => {
    setMove((move == 'X') ? 'O' : 'X')
    //console.log(move)
    const newArray = board.slice(0, undo + 1);
    newArray.push(li)
    setBoard(newArray);
    setUndo(undo + 1);
  }

  return (
    <>
      <h1 className="text-center mt-12 text-5xl font-bold font-mono">Tic Tak Toe</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }} className={`${(undo)? 'space-x-10':''}`}>
        <button
          style={{ backgroundImage: `url(${png})` }}
          className={`${(!undo)? 'hidden':'block'} rounded-full h-10 w-10 font-semibold bg-cover text-lg text-center text-white py-1 cursor-pointer scale-90 hover:scale-105 my-5`}
          onClick={() => posU()}></button>
        <button
          className="rounded-full h-10 w-20 border bg-black font-semibold text-lg text-center text-white py-1 cursor-pointer hover:bg-red-500 my-5"
          onClick={() => del()}>Reset</button>
        <button
          style={{ backgroundImage: `url(${png})` }}
          className={`${(!undo || undo >= board.length-1)? 'hidden':'block'} rounded-full h-10 w-10 font-semibold bg-cover text-lg text-center scale-90 rotate-180 text-white py-1 cursor-pointer hover:scale-105 my-5`}
          onClick={() => posR()}></button>
      </div>
      <Board move={move} state={board[undo]} onPlay={handlePlay} />
    </>
  )
}

export default App
