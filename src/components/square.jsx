import React from 'react'

const Square = ({border,value,onSquareClick}) => {

  return (
    <>
      <div className={`board ${border} border-black font-bold h-[4.8rem] w-20 text-6xl text-center cursor-pointer py-1 ${(value == 'X')? 'text-red-500':'text-blue-500'}`}
              onClick={onSquareClick}>{value}</div>
    </>
  )
}

export default Square
