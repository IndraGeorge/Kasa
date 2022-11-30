import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logements'
import Apropos from './pages/Apropos'
import PageNotFound from './pages/PageNotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route path='/logement/:id' element={<Logement />}></Route>
                <Route path='/apropos' element={<Apropos />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>

            </Routes>
        </BrowserRouter>
    )

}

export default App