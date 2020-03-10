import React, {useState} from 'react';
import Square from '../Square/Square';
import styles from './Board.module.scss';

const Board = () => {
    const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(boardSquares);
    let status = winner ? `Winner is ${winner} ` : `Next player: ${xIsNext ? 'X' : 'O'} `;


    const handleClick = (index, winner) => {
        if (winner) return null;
        const newBoardSquares = [...boardSquares];
        if (newBoardSquares[index]) return;
        newBoardSquares[index] = xIsNext ? 'X' : 'O';
        setBoardSquares(newBoardSquares);
        setXIsNext(!xIsNext);
    };
    const boardElements = boardSquares.map((square, index) => (
        <Square
            key={index}
            value={boardSquares[index]}
            onClick={() => handleClick(index, winner)}
        />
    ));


    const restart = () => {
        setBoardSquares(Array(9).fill(null));
        setXIsNext(true)
    };

    function calculateWinner(squares) {
        const winningCombinations = [
            //rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            //cols
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            //cross
            [0, 4, 8],
            [6, 4, 2],
        ];
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div>
            <div>{status}</div>
            <div className={styles.gameBoard}>{boardElements}</div>
            <button onClick={() => restart()}>Restart</button>
        </div>
    )
};

export default Board;
