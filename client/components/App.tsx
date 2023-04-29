import { Route, Routes } from 'react-router-dom'
import AddChart from './AddChart'
import Info from './Info'
import Nav from './Nav'
import Signs from './Signs'
import Charts from './Charts'

function App() {
  return (
    <div className="page">
      <header>
        <h1>Astrology!</h1>
        <div className="header__2">
          <Nav />
        </div>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<Signs />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/add" element={<AddChart />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
