import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import { BrowserRouter as Router } from "react-router-dom"

import "./App.sass"

const App = () =>(
    <Router>
        <Layout />
    </Router>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)