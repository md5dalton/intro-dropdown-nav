import React, { useState } from 'react'
import Anchor from '../Anchor'
import Button from '../Button'
import ContextMenu from '../ContextMenu'
import Icon from '../Icon'
import List from '../List'

import "./styles.sass"

const DropdownButton = ({ direction, children, ...props }) => (
    <Button className="nav-item terciary" {...props}>
        <div>{children}</div>
        <Icon name={`arrow-${direction}`} />
    </Button>
)

export default ({ children, options }) => {
    
    const [ isOpen, setIsOpen ] = useState(false)
    
    const clickHandler = () => setIsOpen(!isOpen)

    const itemHandler = ({ icon, name }, index) => (
        <div className="dropdown-item" key={index}>
            <Anchor>
                { icon && <Icon name={icon} />}
                <div>{name}</div>
            </Anchor>
        </div>
    )

    return (
        <div className="dropdown-wrapper">
            <DropdownButton direction={isOpen ? "up" : "down"} onClick={clickHandler}>{children}</DropdownButton>
            {
                isOpen &&
                <ContextMenu clickHandler={clickHandler}>
                    <div className="options">
                        <List itemHandler={itemHandler} items={options} />
                    </div>
                </ContextMenu>
            }
        </div>
    )
}