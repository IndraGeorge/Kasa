import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logements'
import About from './pages/About'
import PageNotFound from './components/PageNotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/GlobalStyle.scss'

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/logement/:id' element={<Logement />}></Route>
                <Route path='/apropos' element={<About />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>

            </Routes>
            <Footer />

        </BrowserRouter>
    )

}

export default App