import { useState } from 'react'
import Maranatalogo from './assets/Maranatalogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="./assets/logomaranata.png" target="_blank" rel="noreferrer">
          <img src={Maranatalogo} className="logo" alt="Maranata logo" />
        </a>
      </div>
      <h1 className='title'>CLUBE DE DESBRAVADORES MARANATA</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Página em desenvolvimento. Em breve uma nova experiência na palma de suas mãos!
        </p>
      </div>
      <p className="read-the-docs">
        Desenvolvido por FJR Software 2023© Todos os direitos reservados.
      </p>
    </>
  )
}

export default App
