import React, { Fragment, useContext } from "react"
import SideDrawerContext from "../../../context/SidedrawerContext"
import Backdrop from "../../UI/Backdrop"
import NavBar from "../../UI/NavBar"
import SideDrawerToggler from "../../UI/SideDrawerToggler"

import "./styles.sass"

export default () => {

    const { isOpen, toggle } = useContext(SideDrawerContext)
    
    return isOpen && (
        <Fragment>
            <div className="side-drawer">
                <SideDrawerToggler />
                <NavBar />
            </div>
            <Backdrop isOpen onClick={toggle} />
        </Fragment>
    )
}