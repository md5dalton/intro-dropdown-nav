import React from 'react'
import Button from '../Button'
import NavLinks from './NavLinks'

import "./styles.sass"

export default () => (
    <div className="nav-bar">
        <NavLinks />
        <div className="user-buttons">
            <Button className="nav-item terciary">login</Button>
            <Button className="nav-item secondary">register</Button>
        </div>
    </div>
)