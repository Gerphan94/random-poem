import './App.css';
import { Typewriter } from 'react-simple-typewriter'


function App() {
  const words = [
    "Hello",
    "One"
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Typewriter 
            words={words}
            loop={false}
            typeSpeed={180}
            deleteSpeed={50}
            delaySpeed={5000}
            cursor
            cursorStyle='_'
            
            />
        </div>
      </header>
    </div>
  );
}

export default App;
