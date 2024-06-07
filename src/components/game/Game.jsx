import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './game.css';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isO, setIsO] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winnerName, setWinnerName] = useState("");
  const [tie, setTie] = useState(false);
  const location = useLocation();
  const { param1, param2 } = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (winner) {
      const winnerPlayer = winner === 'X' ? param1 : param2;
      setWinnerName(winnerPlayer);
      updateScore(winnerPlayer, 'WIN');
    } else if (tie) {
      updateScore('Tie', 'TIE');
    }
  }, [winner, tie]);

  const updateScore = async (player, status) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/score/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: player, status: status }),
      });
      const data = await response.json();
      console.log('Score update response:', data);
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner || tie) return;

    const newBoard = [...board];
    newBoard[index] = isO ? 'O' : 'X';
    setBoard(newBoard);
    setIsO(!isO);

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
    } else if (newBoard.every(cell => cell !== null)) {
      setTie(true);
    }
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]  
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

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsO(true);
    setWinner(null);
    setWinnerName("");
    setTie(false);
  };

  return (
    <div className="container-game">
      <h1 className="title-game">Tic-Tac-Toe</h1>
      <div className="game-info-container">
        <span className="game-info">{param1} is: X</span>
        <span className="game-info">{param2} is: O</span>
      </div>
      {renderBoard()}
      {winner && (
        <div className="winner-announcement">
          <h2>{winnerName} wins!</h2>
          <button onClick={resetGame} className='button-start'>Play Again</button>
        </div>
      )}
      {tie && (
        <div className="winner-announcement">
          <h2>It's a tie!</h2>
          <button onClick={resetGame} className='button-start'>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
