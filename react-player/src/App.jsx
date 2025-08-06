import { useState, useEffect } from 'react'
import AdPlayer from './components/AdPlayer'
import StationSelector from './components/StationSelector'

function App() {
  const [currentStation, setCurrentStation] = useState(null)

  return (
    <div className="app">
      <StationSelector onSelect={setCurrentStation} />
      <AdPlayer station={currentStation} />
    </div>
  )
}

export default App