import React, { Fragment, useState } from "react"
import { SideDrawerProvider } from "../../context/SidedrawerContext"
import Header from "./Header"
import Main from "./Main"
import SideDrawer from "./SideDrawer"

export default () => {
    const [ sidedrawerIsOpen, setSidedrawerIsOpen ] = useState(false)

    const sidedrawerToggleHandler = () => setSidedrawerIsOpen(!sidedrawerIsOpen)
    
    return (
        <Fragment>
            <SideDrawerProvider>
                <Header />
                <Main />
                <aside>
                    <SideDrawer />
                </aside>
            </SideDrawerProvider>
        </Fragment>
    )
}