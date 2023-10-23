import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Sale from './Pages/Sale/Sale'
import Layout from './Pages/Layout/Layout'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { apartmentStore } from './store/store'
import { toJS } from 'mobx'

function App() {
    useEffect(() => {
        axios.get('http://localhost:3001/getBuildings').then((response) => {
            const plainApartments = response.data.map((apartment) => toJS(apartment));
            apartmentStore.setApartments(toJS(plainApartments))
        })
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sale" element={<Sale />} />
            </Route>
        </Routes>
    )
}

export default App
