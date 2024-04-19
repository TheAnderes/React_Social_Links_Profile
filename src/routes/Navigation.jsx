import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import RickAndMortyApp from '../components/RickAndMortyApp'

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/character" element={<RickAndMortyApp />} />
                <Route path="/*" element={<p>Error 404</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation