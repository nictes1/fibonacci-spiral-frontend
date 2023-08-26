import React, { useState } from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);
  const [matrix, setMatrix] = useState([]);

  const generateMatrix = async () => {
    try {
      const response = await fetch(`http://localhost:8080/spiral?rows=${rows}&cols=${cols}`);
      const data = await response.json();
      const spiralMatrix = data.rows;

      setMatrix(spiralMatrix);
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderMatrix = () => {
    return (
      <div className="matrix-container">
        {matrix.map((row, rowIndex) => (
          
          <div key={rowIndex} className="matrix-row">
            
            {row.map((cell, colIndex) => (
              
              <span key={colIndex} className="matrix-cell">
                {cell}
              </span>
            
            ))}
            <br /> {}
          
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="App">
      <h1 className="title">Fibonacci Spiral </h1>
      <div className="input-container">
        <label className="input-row" htmlFor="rows">Number of Rows:</label>
        <input
          className="number-row"
          type="number"
          id="rows"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value))}
        />
        <label className="input-col" htmlFor="cols">Number of Columns:</label>
        <input
          className="number-col"
          type="number"
          id="cols"
          value={cols}
          onChange={(e) => setCols(parseInt(e.target.value))}
        />
        <button type="button" onClick={generateMatrix}>
          Calculate
        </button>
      </div>
      <div className="matrix-container">{renderMatrix()}</div>
    </div>
  );
}

export default App;
