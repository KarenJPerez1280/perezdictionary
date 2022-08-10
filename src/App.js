
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
          <Dictionary defaultKeyword="love" />
        </main>
        <footer className='footer'>
          This project was coded by Karen Perez, and is open-source code on {" "}
          <a
            className="link"
            href="https://github.com/KarenJPerez1280/perezdictionary"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>

        </footer>
      </div>
    </div>
  );
}


