import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mostrar, setMostrar] = useState(false);
  const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  const libros = [
    { titulo: 'el principito', autor: 'Antoine de Saint-Exupery' },
    { titulo: '1984', autor: 'George Orwell'},
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien'}
  ];

  const hora = new Date().getHours(0);
  let saludo;

  if (hora >= 6 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>{saludo}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
        ))}
      </ul>
      <div>
        {libros.map((libro, index) => (
          <div key={index}>
            <h2>{libro.titulo}</h2>
            <p>{libro.autor}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar' : 'Mostrar'} contenido
      </button>
      </>
  );
        }
export default App;
