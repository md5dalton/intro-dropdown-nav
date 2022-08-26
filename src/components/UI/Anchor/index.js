import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = ({ children, ...props }) => <Link {...props}>{children}</Link>

Anchor.defaultProps = {
    to: "/"
}

export default Anchor