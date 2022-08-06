
import './App.css';
import dictionary from './dictionary.png';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="App-header">

          <img src={dictionary} className="Dictionary" alt="img" />

        </header>
        <main>
          <Dictionary />
        </main>
        <footer className='footer'>
          karen
        </footer>
      </div>
    </div>
  );
}


