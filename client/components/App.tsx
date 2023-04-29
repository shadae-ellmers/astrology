import { Route, Routes } from 'react-router-dom'
import AddChart from './AddChart'
import Info from './Info'
import Nav from './Nav'
import Signs from './Signs'
import Charts from './Charts'

function App() {
  return (
    <>
      <header className="header">
        <img src="../../images/mario.png" alt="mario cartoon" />
        <h1 className="header__1">Starsigns!</h1>
        <div className="header__2">
          <Nav />
        </div>
        <img src="../../images/mario.png" alt="mario cartoon" />
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Signs />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/add" element={<AddChart />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </section>
    </>
  )
}

export default App
