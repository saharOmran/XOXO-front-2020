import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './game.css';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isO, setIsO] = useState(true);
  const [winner, setWinner] = useState(null);
  const location = useLocation();
  const { param1, param2 } = location.state;

  useEffect(() => {
    if (winner) {
      console.log(`Winner: ${winner}`);
    }
  }, [winner]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isO ? 'O' : 'X';
    setBoard(newBoard);
    setIsO(!isO);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    }
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]            // diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const renderCell = (index) => {
    const cellValue = board[index];
    const cellClass = cellValue === 'O' ? 'button o' : cellValue === 'X' ? 'button x' : 'button';

    return (
      <button key={index} className={cellClass} onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const renderBoard = () => {
    return (
      <div className="board">
        {[0, 3, 6].map(startIndex => (
          <div key={startIndex} className="board-row">
            {board.slice(startIndex, startIndex + 3).map((_, i) => renderCell(startIndex + i))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="game-info-container">
        <span className="game-info">{param1}: X</span>
        <span className="game-info">{param2}: O</span>
      </div>
      {renderBoard()}
      {winner && (
        <div className="winner-announcement">
          <h2>{winner === 'X' ? param1 : param2} wins!</h2>
        </div>
      )}
    </div>
  );
}

export default Game;
