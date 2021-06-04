import { useState } from 'react';
import logo from '../src/logo.svg';
import './App.css';

function UseState() {
  const [reverse, setReverse] = useState(false);
  const [count, setCount] = useState(0);
  const [bgcolor, setBgcolor] = useState('');

  const reverseClass = reverse ? 'reverse' : '';
  const countClass = bgcolor ? 'bgcolor' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleClickCount = () => {
    setCount((prevCount) => prevCount + 1);
    setBgcolor((bgcolor) => !bgcolor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1 className={`count ${countClass}`}>
          Count = {count} - {countClass}
        </h1>

        <button onClick={handleClickCount} type="button">
          Count ++ {count} - {countClass}
        </button>

        <button onClick={handleClick} type={'button'}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

export { UseState };

// npx eslint src/**/*js --fix
// npx eslint src/**/*jsx --fix
