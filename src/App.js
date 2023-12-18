import './App.css';
import { Typewriter } from 'react-simple-typewriter'


function App() {
  const poems = require('./poem.js');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Typewriter 
            words={poems}
            loop={false}
            typeSpeed={60}
            deleteSpeed={20}
            delaySpeed={3000}
            cursor
            cursorStyle='_'
            />
          
        </div>
      </header>
    </div>
  );
}

export default App;
