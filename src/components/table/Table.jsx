import React, { useEffect, useState } from 'react';
import './table.css';

const Table = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchTopPlayers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/top10/', {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        console.error('Error fetching top players:', error);
      }
    };

    fetchTopPlayers();
  }, []);

  return (
    <>
      <div className='tablebody'>
        <h1 className='title-table'>Tic-Tac-Toe</h1>
        <h2 className='top'>SCORE TABLE (TOP 10)</h2>
        <table className='d-flex justify-content-center w-80'>
          <thead>
            <tr>
              <th>ROW</th>
              <th>NAME</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
