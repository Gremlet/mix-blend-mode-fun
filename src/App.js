import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Aurora from './Views/Aurora'
import Header from './components/Header'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/aurora' element={<Aurora />} />
            </Routes>
        </Router>
    )
}

export default App
