import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NoPage from './pages/NoPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
