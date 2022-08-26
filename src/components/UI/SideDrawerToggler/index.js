import React, { useContext } from 'react'
import SideDrawerContext from '../../../context/SidedrawerContext'
import Icon from '../Icon'

export default () => {

    const { isOpen, toggle } = useContext(SideDrawerContext)
    
    return (
        <div className="sidedrawer-toggler" onClick={toggle}>
            <Icon name={`${isOpen ? "close-menu" : "menu"}`} />
        </div>
    )
}