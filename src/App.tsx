import { useCounter } from './hooks/useCounter';
import viteLogo from './assets/vite.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const { count, increment } = useCounter();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello <b>Vitest Preview</b>!
        </p>
        <div>
          <img src={viteLogo} alt="Vite Logo" width={100} />
          <img src="/vitest.svg" alt="Vitest Logo" width={100} />
        </div>

        <p>
          <button className="counter" type="button" onClick={increment}>
            count is: {count}
          </button>
        </p>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
