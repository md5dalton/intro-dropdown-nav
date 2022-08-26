import React from 'react'
import Logo from '../../UI/Logo'
import NavBar from '../../UI/NavBar'
import SideDrawerToggler from '../../UI/SideDrawerToggler'

import "./styles.sass"

export default () => (
    <header>
        <div className="flex-wrapper">
            <Logo />
            <NavBar />
            <SideDrawerToggler />
        </div>
    </header>
)