import React from 'react'
import Dropdown from '../../Dropdown'
import Anchor from '../../Anchor'

const features = [
    { name: "todo list", icon: "todo" },
    { name: "calendar", icon: "calendar" },
    { name: "reminders", icon: "reminders" },
    { name: "planning", icon: "planning" }
]

const company = [
    {name: "history"},
    {name: "our team"},
    {name: "blog"}
]

export default () => (
    <div className="nav-links">
        <div className="buttons-wrapper">
            <Dropdown options={features}>features</Dropdown>
            <Dropdown options={company}>company</Dropdown>
        </div>
        <div className="links-wrapper">
            <Anchor className="nav-item">careers</Anchor>
            <Anchor className="nav-item">about</Anchor>
        </div>
    </div>
)